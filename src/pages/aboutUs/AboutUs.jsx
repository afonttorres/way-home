import '../aboutUs/aboutUs.css';
import { SocialProof } from '../../components/reusables/SocialProof/SocialProof';

export const AboutUs = () => {


    const comments = [
        { comment: "Mi perro y yo hemos encontrado casa y somos", user: 'John Doe' },
        { comment: "Mi gato y yo hemos encontrado casa y somos", user: 'John Doe' },
        { comment: "Mi conejo y yo hemos encontrado casa y somos", user: 'John Doe' },
    ]


    return (
        <div className=" aboutUs-wrapper col">
            {/* {comments.map((comment, key) => (
                <SocialProof key={key} comment={comment} />
            ))} */}
        </div>
    )
}