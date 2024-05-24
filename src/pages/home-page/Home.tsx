import burgerImage from './homepage-picture.jpeg';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <header className="home__header">
                <h1 className="home-title">Welcome to Burger Social, a review site for burger fanatics!</h1>
            </header>
            <div className="div-with-divider"/>
            <img src={burgerImage} alt="Burger" className="home__image"/>
            <p className="home__description">
                Here at Burger Social, we're all about the love for burgers. You can review your favorite burgers,
                upload pictures of the burgers you've tried, and even find nearby burger places on a map. Join us and
                share your burger experiences with the world!
            </p>
            <div className="home__picture-gallery">

            </div>
        </div>
    );
}

export default Home;