import '../mainCard/mainCard.css';
export const MainCard = ({ housing }) => {
    return (
        <article className = 'cardContainer'>
            <div className='cardImage'>
                <img src={housing.imgUrl1} alt="img"></img>
                {/* <div className='star'>★{housing.star}</div> */}
            </div>
            <div className='cardText'>
                <span className='tag'>{housing.category}</span>
                <span className='title'><h3>{housing.title}</h3></span>
                <span className='location'><img className ='icon' src="https://img.icons8.com/fluency-systems-regular/48/000000/marker--v1.png"/>{housing.location}</span>
                <span className='price'>{housing.price}€/per month</span>
            </div>
        </article>
    )
}