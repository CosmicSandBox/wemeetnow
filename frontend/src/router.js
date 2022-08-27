import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Destination from './Destination';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />

                </Routes>
        </BrowserRouter>
    );
}
export default Router;
