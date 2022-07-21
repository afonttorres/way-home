import { displayUtil } from '../../../utils/display';
import '../AnimalDisplay/animalDisplay.css';

export const AnimalDisplay = ({pet, fontSize, top, right, color}) =>{
    const styles = {
        fontSize: fontSize,
        top: top,
        right: right,
        color: color
    }
    return <span className="animal-cont" style={styles}>{displayUtil.findPetIcon(pet)}</span>
}