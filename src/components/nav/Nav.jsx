import '../nav/nav.css';
export const Nav = () => {
    return (
        <nav id='nav'>
            <span className="btnMB">
                <i className="fa-solid fa-angle-left"></i>
            </span>
            <span className="btnMB">
                <i className="fa-solid fa-bookmark"></i>
            </span>
            <div className="nav-contentDT row">
                <span className="nav-itemDT">Home</span>
                <span className="nav-itemDT">Search</span>
                <span className="nav-itemDT">Profile</span>
            </div>
        </nav>
    )
}