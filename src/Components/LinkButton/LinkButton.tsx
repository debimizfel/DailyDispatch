import { Link } from 'react-router-dom';
import './LinkButton.css';
import { ReactNode } from 'react';

interface LinkButtonProps {
    children?: ReactNode;
    target: string;
}

function LinkButton({ children, target }: LinkButtonProps): JSX.Element {

    return (
        <div className="LinkButton">
            <Link to={target} role="button">{children}</Link>
        </div>
    );
}

export default LinkButton;
