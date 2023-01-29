import './App.scss';
import Navbar from './components/navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home-page';
import EventList from './pages/event-list';
import Footer from './components/footer';
import {useEffect, useState} from 'react'
import EventInfo from './pages/event-info'
import NoPage from './pages/no-page';
import About from './components/about';
import Register from './pages/register';



function App() {







  return (
    <>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='events' element={<EventList />}/>
          <Route path='register' element={<Register />} />
          <Route path='details/:type' element={<EventInfo />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
