import "./App.css";
import Header from "./Components/Header";
import AddMealForm from "./Components/AddMealForm";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AddMealForm />
      </main>
    </div>
  );
}

export default App;
