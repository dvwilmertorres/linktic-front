import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator, View, Image, useTheme, Text } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import SiteNav from './components/common/SiteNav';
import SiteFooter from './components/common/SiteFooter';
import HomePage from './components/home/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter con el alias de Router
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function App() {
  const components = {
    Header() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Image
            alt=""
            src=""
          />
        </View>
      );
    },
    Footer() {
      const { tokens } = useTheme();
  
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]}>
            &copy; Wilmer Giovanny Torres Achury
          </Text>
        </View>
      );
    },
  };

  return (
    <Authenticator loginMechanisms={['email']} components={components}>
      {({ signOut, user }) => (
        <Router> {/* Asegúrate de envolver tus Routes con Router */}
          <div>
            <SiteNav logOut={signOut} />
            <Routes>
              <Route path='*' element={<HomePage />} />
              <Route path='/' exact={true} element={<HomePage />} />
            </Routes>
            <SiteFooter />
          </div>
        </Router>
      )}
    </Authenticator>
  );
}

export default App;
