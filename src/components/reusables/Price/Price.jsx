import '../Price/price.css';
export const Price = ({ housing, margin }) => {
    return (
        <p className="detail-text price-weight" style={{ margin: margin }}>
            <span className="currency-text price-weight">$</span>
            <span className='price-text price-weight'>{housing.price}
            </span> /per month</p>
    )
}