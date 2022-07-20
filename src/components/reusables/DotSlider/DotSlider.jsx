import '../DotSlider/dotSlider.css';
export const DotSlider = ({ imgs, current, slide }) => {

  
    return(
        <div className="dots-container">
            {imgs ? imgs.map((img, key)=>(
                <span onClick={()=>{slide(key)}} key={key} className="dot" style={{backgroundColor: key == current ? 'var(--red)' : 'var(--main-color)'}}></span>
            )):null}
        </div>
    )
}