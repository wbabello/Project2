import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MoviesList";

function App() {
  return (
    <div className="App">
      <h1> Top Movies </h1>
      <MovieList></MovieList>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
