import { displayUtil } from '../../../utils/display';
import '../AnimalDisplay/animalDisplay.css';

export const AnimalDisplay = ({pet, width}) =>{
    return <span className="animal-cont" style={{width: `${width}`}}>{displayUtil.findPetIcon(pet)}</span>
}