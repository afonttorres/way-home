export const ChatButton = ({ status }) => {
    return (
        <button className="chat-button" style={{display: status == 'approved' || status == 'completed' ? 'block' : 'none'}}>CONTACT</button>

    )
}