import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from "styled-components";
import { LineChart, PieChart, Line, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DatePickerWithRange } from "./SimpleDateRangePicker";
import { InfoCircledIcon, ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import supabase from "../../supabase/supabaseconfig";

// Constantes
const CHART_COLORS = {
  visits: "#C98695",
  services: ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c"]
};

const Admin = () => {
  const [visitsData, setVisitsData] = useState([]);
  const [servicesData, setServicesData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState({
    from: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    to: new Date()
  });

  const fetchVisitsData = useCallback(async () => {
    const { data, error } = await supabase
      .from('visitas')
      .select('fecha, count')
      .gte('fecha', format(dateRange.from, 'yyyy-MM-dd'))
      .lte('fecha', format(dateRange.to, 'yyyy-MM-dd'));
    
    if (error) throw error;
    
    return data.map(({ fecha, count }) => ({
      date: format(new Date(fecha), 'dd/MM/yyyy'),
      visits: count
    }));
  }, [dateRange]);

  const fetchServicesData = useCallback(async () => {
    const { data, error } = await supabase
      .from('citas')
      .select('servicios (nombre)')
      .gte('fecha', format(dateRange.from, 'yyyy-MM-dd'))
      .lte('fecha', format(dateRange.to, 'yyyy-MM-dd'));
    
    if (error) throw error;
    
    const serviceCounts = data.reduce((acc, { servicios }) => {
      const serviceName = servicios.nombre;
      acc[serviceName] = (acc[serviceName] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(serviceCounts).map(([service, count]) => ({ service, count }));
  }, [dateRange]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [visits, services] = await Promise.all([
        fetchVisitsData(),
        fetchServicesData()
      ]);
      setVisitsData(visits);
      setServicesData(services);
    } catch (err) {
      setError('Error al cargar los datos. Por favor, intente nuevamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [fetchVisitsData, fetchServicesData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const customTooltip = useCallback(({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipContainer>
          <p className="label">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </TooltipContainer>
      );
    }
    return null;
  }, []);

  const getTrend = useCallback((data, key) => {
    if (data.length < 2) return 0;
    const last = data[data.length - 1][key];
    const secondLast = data[data.length - 2][key];
    return ((last - secondLast) / secondLast) * 100;
  }, []);

  const totalVisits = useMemo(() => 
    visitsData.reduce((sum, item) => sum + item.visits, 0),
    [visitsData]
  );

  const mostPopularService = useMemo(() => 
    servicesData.sort((a, b) => b.count - a.count)[0]?.service,
    [servicesData]
  );

  return (
    <Container>
      <DashboardContainer>
        <h1>Dashboard de Administración</h1>
        
        <FiltersContainer>
          <h2>Filtros y Controles</h2>
          <FiltersContent>
            <DatePickerWithRange date={dateRange} setDate={setDateRange} />
            <Button onClick={fetchData}>
              Actualizar Datos
            </Button>
          </FiltersContent>
        </FiltersContainer>

        {error && (
          <Alert>
            <h3>Error</h3>
            <p>{error}</p>
          </Alert>
        )}

        {loading ? (
          <LoadingSpinner>
            <div className="spinner"></div>
          </LoadingSpinner>
        ) : (
          <GridContainer>
            <Card>
              <CardHeader>
                <h3>
                  <span>Visitas a la página</span>
                  <InfoCircledIcon aria-label="Muestra el número de visitas diarias a la página" />
                </h3>
              </CardHeader>
              <CardContent>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={visitsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip content={customTooltip} />
                      <Legend />
                      <Line type="monotone" dataKey="visits" stroke={CHART_COLORS.visits} strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <TrendIndicator>
                  <span>Tendencia: </span>
                  {getTrend(visitsData, 'visits') > 0 ? (
                    <TrendUp>
                      <ArrowUpIcon aria-hidden="true" />
                      {getTrend(visitsData, 'visits').toFixed(2)}%
                    </TrendUp>
                  ) : (
                    <TrendDown>
                      <ArrowDownIcon aria-hidden="true" />
                      {Math.abs(getTrend(visitsData, 'visits')).toFixed(2)}%
                    </TrendDown>
                  )}
                </TrendIndicator>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3>Distribución de Servicios</h3>
              </CardHeader>
              <CardContent>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={servicesData}
                        dataKey="count"
                        nameKey="service"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      >
                        {servicesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={CHART_COLORS.services[index % CHART_COLORS.services.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
              
            <Card>
              <CardHeader>
                <h3>Resumen de Estadísticas</h3>
              </CardHeader>
              <CardContent>
                <StatsList>
                  <StatsItem>
                    <StatsLabel>
                      <InfoCircledIcon aria-hidden="true" />
                      Total de visitas:
                    </StatsLabel>
                    <strong>{totalVisits}</strong>
                  </StatsItem>
                  <StatsItem>
                    <StatsLabel>
                      <InfoCircledIcon aria-hidden="true" />
                      Servicio más popular:
                    </StatsLabel>
                    <strong>{mostPopularService}</strong>
                  </StatsItem>
                </StatsList>
              </CardContent>
            </Card>
          </GridContainer>
        )}
      </DashboardContainer>
    </Container>
  );
};

// Estilos con styled-components
const Container = styled.div`
  height: 100vh;
  padding: 20px;
`;

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FiltersContainer = styled.div`
  margin-bottom: 20px;
`;

const FiltersContent = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 15px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const ChartContainer = styled.div`
  height: 300px;
`;

const TrendIndicator = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const TrendUp = styled.span`
  color: green;
  display: flex;
  align-items: center;
`;

const TrendDown = styled.span`
  color: red;
  display: flex;
  align-items: center;
`;

const StatsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StatsItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StatsLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Alert = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const TooltipContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
`;

export default Admin;