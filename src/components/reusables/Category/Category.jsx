import '../Category/category.css';
export const Category = ({ category }) => {

    return (
        <button className="category-btn">
            {category}
        </button>
    )
}