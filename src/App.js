import "./App.css";
import { mockData } from "./components/mock-data";
import SkeletonLoader from "./components/SkeletonLoader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SkeletonLoader data={mockData} />
      </header>
    </div>
  );
}

export default App;
