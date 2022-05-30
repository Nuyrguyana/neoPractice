import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./components/appRouter";

export const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    );
}
