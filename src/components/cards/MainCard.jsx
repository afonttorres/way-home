export const MainCard = ({ housing }) => {
    return (
        <article class = 'cardContainer'>
            <div class='cardImage'>
                <img src={housing.imgUrl1} alt="img"></img>
                {/* <div class='star'>★{housing.star}</div> */}
            </div>
            <div class='cardText'>
                <span class='tag'>{housing.category}</span>
                <span class='title'><h3>{housing.title}</h3></span>
                <span class='location'><img class ='icon' src="https://img.icons8.com/fluency-systems-regular/48/000000/marker--v1.png"/>{housing.location}</span>
                <span class='price'>{housing.price}€/per month</span>
            </div>
        </article>
    )
}