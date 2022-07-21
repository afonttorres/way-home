import '../detailCard/detailCard.css';
import { MainButton } from '../../buttons/MainButton';
import { Category } from '../../reusables/Category/Category';
import { Price } from '../../reusables/Price/Price';
import { Spec } from '../../reusables/Spec/Spec';
import { Ratio } from '../../reusables/Ratio/Ratio';
import { useEffect, useState } from 'react';
import { TitleDisplay } from '../../reusables/TitleDisplay/TitleDisplay';
import { SeeAll } from '../../reusables/SeeAll/SeeAll';
import { AnimalDisplay } from '../../reusables/AnimalDisplay/AnimalDisplay';

export const DetailCard = ({ housing, specs }) => {

    const [start, setStart] = useState();

    useEffect(() => {

    }, [start])

    const closeDetail = (e) => {
        let end = e.changedTouches[0].clientY;
        let card = document.querySelector('.detailCard');
        if (end) card.classList.toggle('card-bottom');
    }

    return (
        <article className='detailCard' onTouchStart={(e) => setStart(e.changedTouches[0].clientY)} onTouchEnd={closeDetail}>

            <div className="scrollBar"></div>

            <header className='detailCard-header col'>
                <div className="row category-cont">
                    <Category category={housing.category} />
                    <Ratio ratio={housing.ratio} />
                    <div className="col" style={{ height: 'fit-content', width: 'fit-content', alignItems: 'flex-end' }}>
                        <span className="title capitalize" style={{ color: 'var(--main-color)', fontWeight: '900' }}>{housing.publisher.name}</span>
                        <span className="title uncapitalize" style={{ color: 'var(--main-color)', fontWeight: '100' }}>@{housing.publisher.username}</span>
                    </div>

                </div>
                <div className="row">
                    <TitleDisplay housing={housing} />
                </div>
            </header>


            <section className='detailCard-specs col'>
                <SeeAll title={'facilities'} goTo={'/facilities'} />
                <div className="specs-cards row">
                    {specs.map((s, key) => (
                        <Spec key={key} specification={s.spec} />
                    ))}
                </div>
                <AnimalDisplay pet={housing.animal} />
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
                    <Price housing={housing} />
                    <MainButton text={"Book Now"} />
                </div>
            </footer>
        </article>
    )
}