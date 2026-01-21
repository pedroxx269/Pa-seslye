import logo from './logo.svg';
import './App.css';
import Cabeça from './componentes/Cabeça';
import Paises from './componentes/Paises';

function App() {
  return (
    <div className="App">
       <Cabeça/>
       <Paises nome='Brasil'/>
       <Paises nome='Alemanha'/>
       <Paises nome='Estados unidos'/>
       <Paises nome='China'/>
    </div>
  );
}

export default App;
