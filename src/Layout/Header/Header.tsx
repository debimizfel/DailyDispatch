import './Header.css';

function Header(): JSX.Element {
    return (
        <div className="Header  container">
            <nav>
                <ul>
                    <li><strong>Brand</strong></li>
                </ul>
                <ul>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#" role="button">Button</a></li>
                </ul>
            </nav>
            <hgroup>
                <h1>Welcome</h1>
                <p>Ullamco exercitation dolor quis sint. Consequat deserunt sit voluptate incididunt sit non duis. Deserunt consectetur ex ipsum minim adipisicing. Deserunt proident sint fugiat est elit laborum minim minim tempor dolor et duis deserunt occaecat.</p>
            </hgroup>
        </div>
    );
}

export default Header;
