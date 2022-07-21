import { LandingButton } from "../../components/buttons/LandingButton"
import houseG from "../../assets/houseG.avif";
import "../landing/landing.css";

export const Landing = () => {


    return (
        <div className="landing-wrapper col" style={{ backgroundImage: `url(${houseG})` }}>
            <div className="col" style={{
                height: '50%',
                gap: '5%'
            }}>
                <h2 className="main-title landing-title">Find your Perfect Place</h2>
                <p className="title landing-subtitle">you and your pets</p>
            </div>
            <div className="col" style={{ height: 'fit-content' }}><LandingButton /></div>
            {/* boton para ir a about us */}
        </div>



    )
}

