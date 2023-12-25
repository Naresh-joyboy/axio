import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Create from './Create';
import Update from './Update';
import Edit from './Edit';
import { createContext } from 'react';

export const Appcontext= createContext(null);
const url = 'https://65796e9df08799dc8046ef23.mockapi.io/details/name'

function App() {
  return (
    <div className="App">
    <h2>Details</h2>
    
      <BrowserRouter>     
        <Routes>       
          <Route path='/' element={<Create url={url}/>}/>
          <Route path='/update' element={<Update url={url}/>}/>
          <Route path='/edit' element={<Edit url={url}/>}/>
        </Routes>       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
