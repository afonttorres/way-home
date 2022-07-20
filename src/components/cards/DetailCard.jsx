import '../cards/cards.css';
export const DetailCard = ({ housing }) => {
    return (
        <article className='detailCard'>
            {housing.title}
        </article>
    )
}