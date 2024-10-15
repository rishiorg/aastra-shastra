import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, BottomNavigation, BottomNavigationAction, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SettingsIcon from '@mui/icons-material/Settings';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Explore from './components/Explore';
import Settings from './components/Settings';
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css';

const App = () => {
  const [value, setValue] = React.useState(0);
  const [user, setUser] = useState(null); // Keep track of the logged-in user

  return (
    <Router>
      <Navbar user={user} />
      <div style={{ marginTop: '80px', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} /> {/* Signup route */}
        </Routes>
      </div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
        sx={{ position: 'fixed', bottom: 0, width: '100%' }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
        <BottomNavigationAction label="Explore" icon={<ExploreIcon />} component={Link} to="/explore" />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} component={Link} to="/settings" />
      </BottomNavigation>
    </Router>
  );
};

export default App;
