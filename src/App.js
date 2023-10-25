import "./App.css";
import Row from "./components/Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <h3>let watch some movie</h3>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOiginal} />
      <Row title="NEXT RATED" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
