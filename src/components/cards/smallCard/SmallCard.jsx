import '../smallCard/smallCard.css';
import { Category } from '../../reusables/Category/Category';
import {TitleDisplay} from '../../reusables/TitleDisplay/TitleDisplay';
import {Price} from '../../reusables/Price/Price';
import {AnimalDisplay} from '../../reusables/AnimalDisplay/AnimalDisplay';

export const SmallCard = ({ housing }) => {
    return (
        <article className="smallCard-cont row">
            <div className="smallCard-img-cont col">
                <img src={housing.imgUrl1} alt="" />
            </div>
            <div className="smallCard-info-cont col">
                <Category category={housing.category} />
                <TitleDisplay housing={housing} />
                <Price housing={housing}/>
                <AnimalDisplay pet={housing.animal} top={'5%'} fontSize={'2rem'} right={'5%'}/>
            </div>
        </article>
    )
}