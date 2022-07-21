import { Link } from 'react-router-dom';
import '../footer/footer.css';
export const Footer = () =>{
    return (
        <footer id='footer'>
            <Link to='/home'><i className="fa-solid fa-house"></i></Link>
            <Link to='/match'><i className="fa-solid fa-file-lines"></i></Link>
            <Link to='/favorites'><i className="fa-solid fa-heart"></i></Link>
            <Link to='/profile'><i className="fa-solid fa-paw"></i></Link>
        </footer>
    )
}