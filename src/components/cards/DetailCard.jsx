import { MainButton } from '../buttons/MainButton';
import '../cards/cards.css';
import { Category } from '../reusables/Category/Category';
import { Price } from '../reusables/Price/Price';
import { Spec } from '../reusables/Spec/Spec';
import { Ratio } from '../reusables/Ratio/Ratio';

export const DetailCard = ({ housing }) => {

    

    return (
        <article className='detailCard'>

            <div className="scroll-bar"></div>

            <header className='detailCard-header col'>
                <div className="row category-cont">
                    <Category category={housing.category}/>
                    <Ratio ratio={housing.ratio}/>
                </div>
                <div className="row">
                    <div className="col title-cont">
                        <span className='main-title'> {housing.title}</span>
                        <span className='detail-text capitalize'><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;{housing.location}</span>
                    </div>
                </div>
            </header>


            <section className='detailCard-specs col'>
                <div className="specs-titles row">
                    <span className='title'>facilities</span>
                    <span className='detail-text capitalize' style={{color:'var(--main-color)'}}>see all</span>
                </div>
                <div className="specs-cards row">
                    {housing.specs.map((s, key) => (
                        <Spec specification={s}/>
                    ))}
                </div>
            </section>

            <section className="detailCard-desc col">
                <div className="desc-title">
                    <span className='title'>Description</span>
                </div>
                <div className="desc-content">
                    <p className='detail-text'>{housing.description}</p>
                </div>
            </section>

            <footer className='detailCard-footer row'>
                <div className="price-cont row">
                    <Price housing={housing}/>
                    <MainButton text={"Book Now"}/>
                </div>
            </footer>
        </article>
    )
}