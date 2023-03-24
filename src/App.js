import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './pages/first/First';
import Second from './pages/second/Second';
import Third from './pages/third/Third';
import Fourth from './pages/fourth/Fourth';
import Fifth from './pages/fifth/Fifth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<First />} />
        <Route path='/second' element={<Second />} />
        <Route path='/third' element={<Third />} />
        <Route path='/fourth' element={<Fourth />} />
        <Route path='/fifth' element={<Fifth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
