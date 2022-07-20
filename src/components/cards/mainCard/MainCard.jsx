import { useNavigate } from 'react-router-dom';
import { Category } from '../../reusables/Category/Category';
import { Price } from '../../reusables/Price/Price';
import { TitleDisplay } from '../../reusables/TitleDisplay/TitleDisplay';
import '../mainCard/mainCard.css';
export const MainCard = ({ housing }) => {

    const navigate = useNavigate();

    return (
        <article onClick={() => navigate(`/detail/${housing.id}`)} className='MainCard-cont col'>
            <div className='MainCard-img-cont col'>
                <img src={housing.imgUrl1} alt="img"></img>
            </div>
            <div className='MainCard-info-cont col'>
                <Category category={housing.category}/>
                <TitleDisplay housing={housing} />
                <Price housing={housing}/>
            </div>
        </article>
    )
}