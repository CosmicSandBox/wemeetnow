import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Destination from './Destination';
import Starting from './Starting';
import Result from './Result';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/destination' element={<Destination />} />
                <Route path='/starting' element={<Starting />} />
                <Route path='/result' element={<Result />} />
                </Routes>
        </BrowserRouter>
    );
}
export default Router;
