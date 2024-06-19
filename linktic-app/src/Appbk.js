import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, ThemeProvider } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard'; // Asegúrate de importar tu componente Dashboard

Amplify.configure(awsconfig);

const myTheme = {
  
};

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

const signUpConfig = {
  signUpFields: [
    {
      label: "Correo Electrónico",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "email", // Asegúrate de que el tipo sea 'email'
    },
    // Puedes añadir otros campos opcionales aquí si lo necesitas
  ],
};

export default withAuthenticator(App, { signUpConfig });
