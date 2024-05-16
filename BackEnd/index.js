const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv').config();


const app = express();
const PORT = 5000;

console.log(process.env.URL_DATABASE);

// Configura Supabase
 const supabaseUrl = process.env.URL_DATABASE;
 const supabaseKey = process.env.KEY_DATABASE;
 const supabase = createClient(supabaseUrl, supabaseKey);

 app.get('/', async (req, res) => {
    const { data, error } = await supabase.from('profesionales').select('*');
    if (error) {
         return res.status(500).json({ error: 'Error al obtener datos de Supabase' });
     }

     res.json(data);
 });

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
