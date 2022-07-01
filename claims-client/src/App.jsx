import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/appRouter";

export const App = () => {
    return (
        <div className='wrapper'>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
        </div>
    );
}
