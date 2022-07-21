export const SocialProof = ({ comment }) => {
    return (
        <div className="col">
            <span>{comment.comment}</span>
            <span>{comment.user}</span>
        </div>
    )
}