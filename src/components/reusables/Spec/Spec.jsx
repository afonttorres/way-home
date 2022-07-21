import '../Spec/spec.css';
import { displayUtil } from '../../../utils/display';
export const Spec = ({specification}) =>{

    

    return(
        <div className="spec-cont col">
            <span className='spec-icon'>{displayUtil.findSpecIcon(specification)}</span>
            <span className="detail-text spec-text capitalize">{specification}</span>
        </div>
    )
}