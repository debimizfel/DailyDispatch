import Home from '../Home/Home';
import LogIn from '../LogIn/LogIn';
import Settings from '../Settings/Settings';
import SignUp from '../SignUp/SignUp';
import './Routing.css';
import { Navigate, Route, Routes } from "react-router-dom";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default Routing;
