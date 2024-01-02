import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import SendBook from './pages/SendBook';
import Result from './pages/Result';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/question' element={<Question />} />
                <Route path='/sendbook' element={<SendBook />} />
                <Route path='/result/:key' element={<Result />} />
                {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
}
  
export default App;