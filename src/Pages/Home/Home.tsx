import './Home.css';
import Hero from "../../Components/Hero/Hero"
import Card from '../../Components/Card/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../../GlobalState/Store';
import CallBackButton from '../../Components/CallBackButton/CallBackButton';
import { useEffect, useState } from 'react';
import { NewModel } from '../../Models/NewModel';
import NewsService, { Categories } from '../../Service/NewsService';

function Home(): JSX.Element {
    const categories: Categories[] = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
    const user = useSelector((state: RootState) => state.auth.user);
    const [cards, setCards] = useState<NewModel[]>([]);

    useEffect(() => {
        NewsService.getCategory(categories[Math.floor(Math.random() * categories.length)])
            .then(c => setCards(c))
            .catch(e => alert(e.message));
    }, []);

    return (
        <div className="Home ">
            <Hero>
                <h1>Welcome {user ? user.firstName : ""}</h1>
                <p>DailyDispatch is your premier source for up-to-the-minute news and insights from around the world. We are committed to delivering breaking stories, in-depth analysis, and thought-provoking commentary on the most pressing issues of our time. Whether you're interested in politics, technology, culture, or beyond, our dedicated team of journalists works tirelessly to provide you with a well-rounded and comprehensive view of the day's events. Stay informed and engaged with DailyDispatch, where our mission is to empower you with the knowledge you need to make sense of a rapidly changing world.</p>
                <CallBackButton callback={() => window.scrollTo({ top: 300, left: 0, behavior: 'smooth' })}>News</CallBackButton>
            </Hero>
            <div className='feed'>
                <div className="container">
                    {cards.map(c => <Card title={c.title} urlToImage={c.urlToImage} description={c.description} url={c.url} />)}
                </div>
            </div>
        </div>
    );
}

export default Home;
