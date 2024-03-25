import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import routes from './config/routes';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Navbar from './components/Navbar.tsx';

function App() {

    return (
        <BrowserRouter>
            <Navbar />
                <Routes>
                    {routes.map((route: any, index: any) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                {/* <Route path={"/about"} element={<About />}>            
                    About
                </Route>
                <Route path={"/dashboard"} element={<Dashboard />}>
                    Dashboard
                </Route> */}
                {/* <Route path={''} element={<Home />}>
                    Home
                </Route>  */}
            </Routes>
        </BrowserRouter>
    );
}

export default App
