import logo from './logo.svg';
import './App.css';
import { HomePage } from './containers/Homepage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { UserPage } from './containers/UserPage';
function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/user/:userid' element={<UserPage />} />
          <Route>404 Not Found</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
