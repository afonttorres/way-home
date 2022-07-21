import '../matchCard/matchCard.css';
import { TitleDisplay } from '../../reusables/TitleDisplay/TitleDisplay';
import { Price } from '../../reusables/Price/Price';
import { AnimalDisplay } from '../../reusables/AnimalDisplay/AnimalDisplay';
import { Avatar } from '../../reusables/Avatar/Avatar';

export const MatchCard = ({ match }) => {
    return (
        <article className="matchCard-cont col">
            <div className="matchCard-img-row row">
                <div className="matchCard-img-cont col">
                    <img src={match.housing.imgUrl1} alt="Housing" />
                </div>
                <div className="matchCard-sel-info-cont col">
                    <div className="row">
                        <div className="matchCard-user-data col">
                            <span className="title capitalize" style={{ color: 'var(--red)', fontWeight: '900' }}>{match.housing.publisher.name}</span>
                            <span className="title uncapitalize" style={{ color: 'var(--red)', fontWeight: '100' }}>@{match.housing.publisher.username}</span>
                            <span className="title uncapitalize" style={{ color: 'var(--red)', fontWeight: '100' }}>{match.housing.publisher.email}</span>
                            <span className='detail-text'>Publicado:<br /> 7 Junio 2022</span>
                        </div>
                        <div className="col">
                            <Avatar url={match.housing.publisher.avatarUrl} top={'-10%'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="matchCard-h-row row">
                <div className="matchCard-h-info-cont col">
                    <TitleDisplay housing={match.housing} />
                    <Price housing={match.housing} />
                    
                    <AnimalDisplay pet={match.housing.animal} top={'55%'} right={'15%'} />
                    <span className='detail-text sol-text'>Solicitado: 22 Julio 2022</span>
                </div>
            </div>
        </article>
    );
}