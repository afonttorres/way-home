import '../smallCard/smallCard.css';
import { Category } from '../../reusables/Category/Category';
import {TitleDisplay} from '../../reusables/TitleDisplay/TitleDisplay';
import {Price} from '../../reusables/Price/Price';

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
            </div>
        </article>
    )
}