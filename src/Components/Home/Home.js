import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <Link to="/">
                <div className="Logo"></div>
              </Link>
              <h1 className="App-title">SHELFIE</h1>
            </header>
            <Link to="/Shelf/Shelf A">
              <div className="Shelf-a">
                <p>Shelf A</p>
              </div>
            </Link>
            <Link to="/Shelf/Shelf B">
              <div className="Shelf-b">
                <p>Shelf B</p>
              </div>
            </Link>
            <Link to="/Shelf/Shelf C">
              <div className="Shelf-c">
                <p>Shelf C</p>
              </div>
            </Link>
            <Link to="/Shelf/Shelf D">
              <div className="Shelf-d">
                <p>Shelf D</p>
              </div>
            </Link>
          </div>

        )
    }
}