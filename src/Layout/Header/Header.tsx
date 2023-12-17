import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Header.css';
import { RootState } from '../../GlobalState/Store';
import AuthService from '../../Service/AuthService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {

    const [offset, setOffset] = useState(window.scrollY);
    const user = useSelector((state: RootState) => state.auth.user);
    const navigator = useNavigate();

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function logout() {
        AuthService.logOut();
        alert("Come back soon!");
        navigator("/home");
    }

    return (
        <div className="Header" style={offset > 0 ? { backgroundColor: "black" } : {}}>

            <div className="container">
                <nav>
                    <ul>
                        <li><strong>DailyDispatch</strong></li>
                    </ul>
                    <ul>
                        {
                            user
                                ? <>
                                    {/* <li>
                                        <input type="search" id="search-input" placeholder="Search a crypto" />
                                    </li> */}
                                    <li><Link to="#" onClick={logout}>Log out</Link></li>
                                    <li><Link to="/settings">Settings</Link></li>
                                </>
                                : <>
                                    {/* <input type="search" /> */}
                                    <li><Link to="/login">Log in</Link></li>
                                    <li><Link to="/signup">Sign up</Link></li>
                                </>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
