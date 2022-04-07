import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create.js';
import Read from './components/Read.js';
import Update from './components/Update.js';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Read/>} />
          <Route path='/post' element={<Create/>} />
          <Route path='/update' element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
