import '../Category/category.css';
export const Category = ({ category }) => {

    console.log(category)
    return (
        <button className="category-btn">
            {category}
        </button>
    )
}