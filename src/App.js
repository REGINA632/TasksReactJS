import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";
import Task from "./Components/Task/Task";

function App() {
  // Task 5
  const getNumber = (arr) => {
    console.log(arr);
  };

  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
      <Task getNumber={getNumber} name="Rega" age={22} />
    </div>
  );
}

export default App;
