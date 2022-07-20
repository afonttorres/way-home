import '../Price/price.css';
export const Price = ({ housing }) => {
    return (
        <p className="detail-text">
            <span className="currency-text">$</span>
            <span className='price-text'>{housing.price}
            </span> /per month</p>
    )
}