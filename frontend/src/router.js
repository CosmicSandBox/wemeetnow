import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Destination from './Destination';
import Starting from './Starting';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/destination' element={<Destination />} />
                <Route path='/starting' element={<Starting />} />

                </Routes>
        </BrowserRouter>
    );
}
export default Router;
