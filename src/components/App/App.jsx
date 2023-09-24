import { Route, Routes } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import About from '../About/About';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';
import Contacts from '../Сontacts/Сontacts';

import Team from '../Team/Team';

import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainPage />}></Route>
      <Route exact path='/about' element={<About />}></Route>
      <Route exact path='/services' element={<Services />}></Route>
      <Route exact path='/projects' element={<Projects />}></Route>
      <Route exact path='/blog' element={<Blog />}></Route>
      <Route exact path='/contacts' element={<Contacts />}></Route>

      <Route exact path='/team' element={<Team />}></Route>
    </Routes>
  );
}

export default App;
