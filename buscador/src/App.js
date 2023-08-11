import { FiSearch } from "react-icons/fi";

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="cantainerInput"> 
      <input type="type" placeholder="digite aqui..."/>
      <button className="buttonSearch">
        <FiSearch size={25} color="#FFF"/>
        

        <FiSearch/>
        
        
      </button>
    </div>
  </div>
  );
}

export default App;
