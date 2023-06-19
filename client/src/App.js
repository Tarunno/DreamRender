import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <div className="App flex items-start justify-start">
      <Header/>
      <div className="container">
        <Routes>
          <Route path='/' element={<IndexPage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
