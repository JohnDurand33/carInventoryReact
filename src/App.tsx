import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import routes from "./config/routes";
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Provider store={store}>
                <Routes>
                    {routes.map(
                        (
                        route: any,
                        index: any // same as below commented out code
                        ) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                            />
                    ))}
            </Routes>
        </Provider>
    </BrowserRouter>
    );
}

export default App

{
    /* <Route path={"/about"} element={<About />}>            
    About
</Route>
<Route path={"/dashboard"} element={<Dashboard />}>
    Dashboard
</Route>
<Route path={''} element={<Home />}>
    Home
</Route> */
}