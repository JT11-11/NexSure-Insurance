import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route,Routes } from "react-router";
import './index.css';
import App from './App.jsx';
import TechnologyPage from './Pages/TechnologyPage.jsx';
import TechLearnMore from './Pages/TechLearnMore.jsx';
import ContactUs from './Pages/ContactUs.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/technologylearnmore" element={<TechLearnMore/>} />
      <Route path ="/ContactUs" element={<ContactUs/>} />
    </Routes>
  </BrowserRouter>
);