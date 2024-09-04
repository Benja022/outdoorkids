import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioFamilia from './FormularioFamilia';
import SuccessPage from './PaginaExito.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FormularioFamilia />} />
                <Route path="/exito" element={<PaginaExito />} />
            </Routes>
        </Router>
    );
}

export default App;
