import { displayUtil } from '../../../utils/display';
import '../AnimalDisplay/animalDisplay.css';

export const AnimalDisplay = ({pet, fontSize, top, right}) =>{
    const styles = {
        fontSize: fontSize,
        top: top,
        right: right
    }
    return <span className="animal-cont" style={styles}>{displayUtil.findPetIcon(pet)}</span>
}