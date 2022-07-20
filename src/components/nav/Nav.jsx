import { Link } from 'react-router-dom';
import '../nav/nav.css';
export const Nav = () => {

    return (
        <nav id='nav'>
            <span className="btnMB">
                <Link to='/home'><i className="fa-solid fa-angle-left"></i></Link>
            </span>
            <span className="btnMB">
                <Link to='/saved'><i className="fa-solid fa-bookmark"></i></Link>
            </span>
            <div className="nav-contentDT row">
                <span className="nav-itemDT"><Link to='/home'>Home</Link></span>
                <span className="nav-itemDT"><Link to='/contact'>Contact</Link></span>
                <span className="nav-itemDT"><Link to='/profile'>Profile</Link></span>
            </div>
        </nav>
    )
}