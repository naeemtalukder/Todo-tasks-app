import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Navbar from './Pages/Sheard/Navbar';
import Calendar from './Pages/Home/Calendar';
import Tasks from './Pages/Home/Tasks';
import Footer from './Pages/Sheard/Footer';
import ToDo from './Pages/Home/ToDo';

function App() {
  
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
