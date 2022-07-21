import { LandingButton } from "../../components/buttons/LandingButton"
import houseG from "../../assets/houseG.avif";
import "../landing/landing.css";
import logo from "../../assets/logo-white.png";

export const Landing = () => {


    return (
        <div className="landing-wrapper col" style={{ backgroundImage: `url(${houseG})` }}>
            <div className="col" style={{
                height: '50%',
                gap: '5%'
            }}>
                <img className="logo" src={logo} />
                <h2 className="main-title landing-title">Home is where your pet is</h2>
                <p className="title landing-subtitle">Encuentra un hogar para ti y para los tuyos</p>
            </div>
            <div className="col" style={{ height: 'fit-content' }}><LandingButton /></div>
        </div>
    )
}

