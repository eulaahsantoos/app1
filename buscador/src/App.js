import { FiSearch } from "react-icons/fi";
import'./style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="cantainerInput"> 
      <input type="type" placeholder="digite aqui..."/>
      <button className="buttonSearch">
        <FiSearch size={25} color="#FFF"/>
      
        
        
      </button>
    </div>
  </div>
  );
}

export default App;
