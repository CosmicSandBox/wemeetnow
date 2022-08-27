import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Destination from './Destination';
import Starting from './Starting';
import Result from './Result';
import Starting2 from './Starting2';
import Starting3 from './Starting3';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/starting' element={<Starting />} />
                <Route path='/starting2' element={<Starting2 />} />
                <Route path='/starting3' element={<Starting3 />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/result' element={<Result />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
