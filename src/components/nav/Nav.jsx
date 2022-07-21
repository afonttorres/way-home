import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../nav/nav.css';
export const Nav = () => {

    const location = useLocation().pathname;

    return (
        <nav id='nav'>
            <span className="btnMB">
                {location.includes('home') ? <Link to='/search'><i className="fa-solid fa-magnifying-glass"></i></Link> : <Link to='/home'><i className="fa-solid fa-angle-left"></i></Link>}
            </span>
            <span className="btnMB">
                <Link to='/saved'><i className="fa-solid fa-bookmark"></i></Link>
            </span>
            <div className="nav-contentDT row">
                {location.includes('home') ? null : <span className="nav-itemDT"><Link to='/home'>Home</Link></span>}
                {location.includes('search') ? null :  <span className="nav-itemDT"><Link to='/search'>Search</Link></span>}
                {location.includes('matches') ? null : <span className="nav-itemDT"><Link to='/match'>Matches</Link></span>}
                {location.includes('profile') ? null :  <span className="nav-itemDT"><Link to='/profile'>Profile</Link></span>}
                {location.includes('about') ? null : <span className="nav-itemDT"><Link to='/about-us'>About Us</Link></span>}                
            </div>
        </nav>
    )
}