import '../aboutUs/aboutUs.css';
import { SocialProof } from '../../components/reusables/SocialProof/SocialProof';

export const AboutUs = () => {


    const comments = [
        { comment: "Mi perro y yo hemos encontrado casa y somos", user: 'John Doe' },
        { comment: "Siempre quise tener una mascota. Ahora  puedo, y he ganado un extra: una compi de piso maravillosa.", user: 'Marina' },
        { comment: "Mi conejo y yo hemos encontrado casa y somos", user: 'John Doe' },
    ]


    return (
        <div className=" aboutUs-wrapper col">
            {comments.map((comment, key) => (
                <SocialProof key={key} comment={comment} />
            ))}
        </div>
    )
}