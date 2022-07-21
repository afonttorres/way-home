import '../Price/price.css';
export const Price = ({ housing, margin }) => {
    return (
        <p className="detail-text" style={{ margin: margin }}>
            <span className="currency-text">$</span>
            <span className='price-text'>{housing.price}
            </span> /per month</p>
    )
}