import React from 'react';
import './Inventory.css';
import { Link } from 'react-router-dom';
import axios from "axios";

export default class Inventory extends React.Component {
constructor() {
    super();

    this.state= {
        name: "",
        price: ""
    }
   this.handleButtonClick = this.handleButtonClick.bind(this);
}

handleButtonClick() {
    console.log("clicked", this.state.name, this.state.price)
    return axios({
        url: `/api/bin/${this.props.match.params.shelfname}/${this.props.match.params.number}`,
        method: "post",
        data: {
            name: this.state.name,
            price: this.state.price
        }
    })
    .then((response) => console.log(response.data))
}

    render() {
        const previous = `/Shelf/${this.props.match.params.shelfname}`
        return (
            <div className="Bin">
                <header>
                    <div className="Bin-logo-header">
                        <Link to="/">
                            <div className="Bin-logo" ></div>
                        </Link>
                    </div>
                    <div className="Bin-header">
                        <Link to={previous}>
                            <h1 className="Title">
                                {this.props.match.params.shelfname}
                            </h1>
                        </Link>
                    </div>
                    <div className="Bin-location">
                        <h1 className="Bin-location-title">
                            {this.props.match.params.number}
                        </h1>
                    </div>
                </header>
                <div>
                    <h1 className="Name">Name</h1>
                    <input 
                        className="Name-input" 
                        value={this.state.name} 
                        onChange={(e) => this.setState({ name:e.target.value }) }>
                    </input>
                    <h1 className="Price">Price</h1>
                    <input 
                        className="Price-input" 
                        value={this.state.price}
                        onChange={(e) => this.setState({ price:e.target.value }) }>
                    </input>
                    <Link to={previous}>
                        <div className="Add-inv" onClick={() => this.handleButtonClick() }>+ Add to Inventory</div>
                    </Link>
                </div>
            </div>
        )
    }
}


