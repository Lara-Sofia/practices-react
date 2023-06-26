
import './App.css';

import Movies from './components/Movies/Movies';
import TableForm from './components/Table/TableForm';
import Calculadora from './components/Calculadora/Calculadora';
import Login from './components/Login/Login';
import ContainerProducts from './components/Product/ContainerProducts';



const App = () => {
  const moviesByWesAnderson = [
    {title: "Fantastic Mr Fox", rating: 7.9}, 
    {title: "Grand Hotel Budapest", rating: 8.1},
    {title: "Moonse Kingdom", rating: 7.8}, 
    {title: "The Room Of Life", rating:7.9},
    {title: "Imposible", rating: 9.1}, 
  ];

  return (
    <div>
      <h1>hola</h1>
      <Movies movies={moviesByWesAnderson}/>
      <p>-----</p>
      <TableForm/>
      <p>-----</p>
      <Calculadora/>
      <p>-----</p>
      <Login/>
      <p>-----</p>
      <ContainerProducts/>
    </div>
  );
}

export default App;
