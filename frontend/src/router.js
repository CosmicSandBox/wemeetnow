import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Destination from './Destination';
import Starting from './Starting';
import Friend1 from './Friend1';
import Friend2 from './Friend2';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Starting />} />
                <Route path='/friend1' element={<Friend1 />} />
                <Route path='/friend2' element={<Friend2 />} />
                <Route path='/destination' element={<Destination />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
