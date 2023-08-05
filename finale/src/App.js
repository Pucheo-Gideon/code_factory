import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from './page/Home';
import LoginPage from './page/Login';
import SinglePage from './page/Single';
import { ListProvider } from './context/List';
import { createContext } from 'react';


const testContext = createContext()



function App() {
  return (
    <ListProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}>
          </Route>
          <Route path="/fish" element={<LoginPage />}>
          </Route>
          <Route path="/single/:value" element={<SinglePage />}>
          </Route>
        </Routes>
      </Router>
    </ListProvider>
  )
}

export default App;
