import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import PlanPage from './pages/PlanPage';
import ClassesPage from './pages/ClassesPage';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>      
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='locations' element={<LocationPage/>} />
        <Route path='contact' element={<ContactPage/>} />
        <Route path='plan' element={<PlanPage/>} />
        <Route path='classes' element={<ClassesPage/>} />
        <Route
            path='home/:LocationId'
            element={<LocationPage />}
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
