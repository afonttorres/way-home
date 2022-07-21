import { LandingButton } from "../../components/buttons/LandingButton"
import houseG from "../../assets/houseG.avif";
import "../landing/landing.css";

export const Landing = () => {


    return (
        <div className="landing-wrapper col">
            <LandingButton />
            {/* boton para ir a about us */}
        
             <div className="houseG">
                 <img src={houseG} alt="houseG" />
            </div>

            <h2 className="tittle-lang">Find your Perfect Place</h2>
            <p>you and your pets</p>
        </div>
        


    )
}

