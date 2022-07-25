import { displayUtil } from '../../../utils/display';
import './badge.css';
export const Badge = ({ text }) => {

    return (
        <button className="category-btn" style={displayUtil.badgeStyle(text)}>
            {text}
        </button>
    )
}