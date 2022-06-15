import {Routes, Route} from "react-router";
import ArticleCreate from './components/ArticleCreate';
import ArticleList from './components/ArticleList';

function App() {
  return (  
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList />}></Route>
        <Route path="/create" element={<ArticleCreate />}></Route>
      </Routes>
    </div>
  );
}

export default App;
