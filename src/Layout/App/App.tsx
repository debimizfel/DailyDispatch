import Routing from '../../Pages/Routing/Routing';
import Header from '../Header/Header';
import './App.css';
import "@picocss/pico"

function App(): JSX.Element {
    return (
        <div className="App">
            <header>
                <Header />
            </header>

            <main>
                <Routing />
            </main>


        </div>
    );
}

export default App;
