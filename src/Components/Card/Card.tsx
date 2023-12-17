import { NavLink } from 'react-router-dom';
import './Card.css';

interface CardProps {
    title: string;
    urlToImage: string;
    description: string;
    url: string
}

function Card({ title, urlToImage, description, url }: CardProps): JSX.Element {
    return (
        <div className="Card">
            <article>
                <img src={urlToImage} alt="" />
                <div className="overlay_text">
                    <strong>{title}</strong>
                    <div style={{ paddingBlock: 10 }}>
                        {description}
                    </div>
                    <a className="url" href={url} target="_blank">Read more on {new URL(url).hostname} </a>
                </div>
            </article>
        </div>
    );
}

export default Card;
