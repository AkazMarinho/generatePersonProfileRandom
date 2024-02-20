
import { Link } from 'react-router-dom';
import './App.css';
import { RoutesApp } from './routes/routes';
import { NavBar } from './navbar/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <RoutesApp/>
    </div>
  );
}

export default App;
