import React from 'react';
import './Bin.css';
import { Link } from 'react-router-dom';
import axios from "axios";


export default class Bin extends React.Component {
    /*36I*/
    constructor(props){ /* 38C */
        super(props);

        this.state={ /*36C*/
            name: "",
            price: "",
            id: "",
            // 26E
            disabled: true
        }
    }

    handleEditClick(){
        console.log("edit selected", this.state.id, this.state.name, this.state.price)
        this.setState({disabled: !this.state.disabled})/*36D*/
    }

    handleSaveClick(){
        console.log("save updated", this.state.id, this.state.name, this.state.price)
        console.log(`/api/bin/update/${this.state.id}/${this.state.name}/${this.state.price}`)
        this.setState({disabled: !this.state.disabled})
            console.log('true')
            return axios({
                url: `/api/bin/update/${this.state.id}/${this.state.name}/${this.state.price}`,
                method: "put"
            })
            .then((response) =>{

            })
    }

    changeName(value){
        this.setState({
            name: value
        })
    }

    changePrice(value){
        this.setState({
            price: value
        })
    }

    deleteInfo(){
        console.log("deleted", this.state.id)
        return axios({
            url: `/api/bin/delete/${this.state.id}`,
            method: "delete"
        })
        .then((response) =>{
            this.setState({
                name: '',
                price: '',
                id: ''
            })
        })
    }

    getBinInventory(){
        return axios({
            url: `/api/bin/${this.props.match.params.shelfname}/${this.props.match.params.number}`,
            method: "get"
        })
        .then((response) =>{
            console.log( response)
            this.setState({
                name: response.data[0].item,
                price: response.data[0].price,
                id: response.data[0].id
            })
        })
    }

    componentDidMount() {
        this.getBinInventory()
    }
/* 38D */
    render() {
        const previous = `/Shelf/${this.props.match.params.shelfname}`
        return (
            <div className="Bin">
            {/* 54D */}
                <header>
                    {/* 54C */}
                    <div className="Bin-logo-header">
                        <Link to="/">
                            <div className="Bin-logo" ></div>
                        </Link>
                    </div>
                    <div className="Bin-header">
                    {/* 54H */}
                        <Link to={previous}>
                            <h1 className="Title">
                                {this.props.match.params.shelfname}
                            </h1>
                        </Link>
                    </div>
                    <div className="Bin-location">
                    {/* 54F */}
                        <h1 className="Bin-location-title">
                            {this.props.match.params.number}
                        </h1>
                    </div>
                </header>
                <div>
                    <div className="Item-pic"></div>
                    <input disabled = {(this.state.disabled)? "disabled" : ""} className="Item-price" type="text" onChange={e => this.changeName(e.target.value)} value={this.state.name}>
                    </input>
                    <input disabled = {(this.state.disabled)? "disabled" : ""} className="Item-price" type="text" onChange={e => this.changePrice(e.target.value)} value={this.state.price}>
                    </input>
                    {
                        this.state.disabled
                        ?
                        <div className="Edit-button" onClick={_=> this.handleEditClick()} >
                            <h1 className="Edit-font">Edit</h1>
                        </div>
                        :
                        <div className="Save-button" onClick={_=> this.handleSaveClick()} >
                            <h1 className="Edit-font">Save</h1>
                        </div>
                    }
                    <Link to={previous}>
                        <div className="Delete-button" onClick={_=> this.deleteInfo()}>
                            <h1 className="Delete-font">Delete</h1>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}



