import '../../reusables/SeeAll/seeAll.css';
import { Link } from 'react-router-dom';

export const SeeAll = ({ title, goTo, width }) => {
    return (
        <div className="seeAll-cont row" style={{width: `${width}`}}>
            <span className='title'>{title}</span>
            <span className='detail-text capitalize' style={{ color: 'var(--main-color)', fontWeight: 'bolder' }}><Link to={`/${goTo}`}>see all</Link></span>
        </div>
    )
}