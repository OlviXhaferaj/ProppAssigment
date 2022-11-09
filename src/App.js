
import './App.css';
import Person from './Component/Persons';
function App() {
  return (
    <div className="App">
      <Person name={"Doe"} 
      lname={"Jane"} 
      age={45} 
      hcolor = {"Black"}
      />
      <Person 
      name={"Smith"}
      lname={"John"}
      age={88}
      hcolor={"Brown"}
      />
      <Person
      name={"Fillmore"}
      lname={"Millard"}
      age={50}
      hcolor={"Brown"}
      />
      <Person
      name={"Smith"}
      lname={"Maria"}
      age={62}
      hcolor={"Brown"}
      />
    </div>
  );
}

export default App;