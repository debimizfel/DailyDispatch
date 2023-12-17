import { ReactNode } from 'react';
import './CallBackButton.css';

interface CallBackButtonProps {
    children?: ReactNode;
    callback: () => void;
}

function CallBackButton({ children, callback }: CallBackButtonProps): JSX.Element {

    return (
        <div className="CallBackButton">
            <a href="#" role="button" onClick={callback}>{children}</a>
        </div>
    );
}

export default CallBackButton;
