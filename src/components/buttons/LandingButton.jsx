import { Link } from 'react-router-dom';
import '../buttons/button.css';
export const LandingButton = () => {


    return (
        <button className="landing-button"><Link to='/home'>Get Started</Link></button>
    )
}