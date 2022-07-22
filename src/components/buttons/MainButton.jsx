import '../buttons/button.css';
export const MainButton = ({text, match, housing}) =>{

    return(
        <button onClick={()=>match(housing.id)} className="main-button">{text}</button>
    )
}