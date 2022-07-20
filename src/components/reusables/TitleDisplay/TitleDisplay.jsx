import '../TitleDisplay/titleDisplay.css';
export const TitleDisplay = ({housing}) => {
    return (
        <div className="col titleDisplay-cont">
            <span className='main-title'> {housing.title}</span>
            <span className='detail-text capitalize'><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{housing.location}</span>
        </div>
    )
}