import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import {auth} from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth';

export const NavBar = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const loginPage = () => {
        navigate('/login');
    }

    const signUserOut = async () => {
        await signOut(auth);
        navigate('/login');
    };
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-contanier'>
            <Link to="main" spy={true} smooth={true} offset={-70} duration={500} className='logo'>logo</Link>

                <div className="nav-links">
                    <Link to="banner" spy={true} smooth={true} offset={-70} duration={500} id='nav-link'>Home</Link>
                    <Link to="services-section" spy={true} smooth={true} offset={-70} duration={500} id='nav-link'>Services</Link>
                    <Link to='issue' spy={true} smooth={true} offset={-70} duration={500} id='nav-link'>Issue</Link>
                </div>
                <div className='user-info'>
                    {user ? 
                    <>
                    <p className='user-text'>Signed in as <span>{user?.displayName}</span></p>
                    <button className='glow-on-hover' onClick={signUserOut}>Log Out</button>
                    </>
                    : 
                    <>
                    <button className='glow-on-hover' onClick={loginPage}>Log In</button>
                    </>    
                    }
                </div>
            </div>
    </nav>
    </>


    )
}
