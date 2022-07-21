import '../Avatar/avatar.css';
export const Avatar = ({ url, top, right }) => {

    const styles = {
        top: top,
        right: right
    }

    return (
        <img className='avatar' src={url} alt="Avatar" style={styles} />
    )
}