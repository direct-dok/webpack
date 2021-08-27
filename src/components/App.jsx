import '../styles/index.scss';
import Recipes from './Recipes';
import React from 'react';
import carImg from '../images/sportcar.jpg';
import truckSvg from '../images/truck.svg';

function App() {
    return (
        <div>
            <section className="hero"></section>
                <main>
                    <section>
                        <h1>Oh hai, React only</h1>
                        <img className="postImg" src={carImg} />
                        <img className="postImg" src={truckSvg} />
                    </section>
                    <Recipes />
                </main>
            
        </div>
    );
}

export default App;