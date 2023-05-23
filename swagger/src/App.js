import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Component/Homepage';

function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Homepage/>}/>
   </Routes>
   </>
  );
}

export default App;
