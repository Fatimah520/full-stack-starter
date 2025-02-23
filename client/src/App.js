import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import { AuthContextProvider, AuthProtected } from './AuthContext';
import Header from './Header';
import Home from './Home';
import Bowl from './Bowl';
import ItemForm from './ItemForm';
import Login from './Login';
import PasswordRoutes from './Passwords/PasswordRoutes';
import Register from './Register';
import UserRoutes from './Users/UserRoutes';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/bowls/new"
            element={
              <AuthProtected isAdminRequired={true}>
                <ItemForm />
              </AuthProtected>
            }
          />
          <Route
            path="/bowls/:id/edit"
            element={
              <AuthProtected isAdminRequired={true}>
                <ItemForm />
              </AuthProtected>
            }
          />
          <Route path="/bowls/:id" element={<Bowl />} />
          <Route path="/login" element={<Login />} />
          <Route path="/passwords/*" element={<PasswordRoutes />} />
          {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && <Route path="/register" element={<Register />} />}
          <Route
            path="/account/*"
            element={
              <AuthProtected>
                <UserRoutes />
              </AuthProtected>
            }
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
