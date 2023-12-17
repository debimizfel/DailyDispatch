import './Hero.css';
import { ReactNode } from 'react';


interface HeroProps {
    height?: string | number;
    children?: ReactNode;
}

function Hero({ children, height }: HeroProps): JSX.Element {

    return (
        <div className="Hero" data-theme="dark" style={{ height: height }}>
            <div className="overlay" >
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Hero;
