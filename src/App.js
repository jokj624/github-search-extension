import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Search from './containers/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
