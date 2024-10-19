import React, { useRef } from 'react';


const ComponentToPrint = React.forwardRef((props, ref) => (
    <div ref={ref}>
        <h1>Hola, este es un componente para imprimir</h1>
    </div>
));

const TestPrint = () => {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Test_Print',
    });

    return (
        <div>
            <ComponentToPrint ref={componentRef} />
            <button onClick={handlePrint}>Imprimir</button>
        </div>
    );
};

export default TestPrint;
