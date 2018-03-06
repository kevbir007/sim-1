import React from 'react';
import './Shelf.css';
import { Link } from 'react-router-dom';
import axios from "axios";


export default class Shelf extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            holder: true,
            'Bin 1': null,
            'Bin 2': null,
            'Bin 3': null,
            'Bin 4': null,
            'Bin 5': null

        }
        console.log(this.state)
        this.getShelfInfo = this.getShelfInfo.bind(this);
    }
    
    componentDidMount(){
        this.getShelfInfo()
        .then((response) =>{
        const self = this
        console.log(response.data)
        //map over response to create shelf item or inventory
        response.data.map(function(value, index) {
            let bin = value.bin
            console.log(bin, self.state[bin])
            self.setState({
                [value.bin]: value
            })
        })
    
        console.log(this.state)
    })
}

getShelfInfo() {
    return axios({
        url:`/api/bin/${this.props.match.params.shelfname}`,
        method: "get"
    })
        
}

    render() {
        const bin1 = `/Shelf/${this.props.match.params.shelfname}/Bin/Bin 1`
        const bin2 = `/Shelf/${this.props.match.params.shelfname}/Bin/Bin 2`
        const bin3 = `/Shelf/${this.props.match.params.shelfname}/Bin/Bin 3`
        const bin4 = `/Shelf/${this.props.match.params.shelfname}/Bin/Bin 4`
        const bin5 = `/Shelf/${this.props.match.params.shelfname}/Bin/Bin 5`
        const inventory = `/Shelf/${this.props.match.params.shelfname}/Bin/`
        return (
            <div className="Shelf">
                <header>
                    <div className="Shelf-logo-header">
                        <Link to="/">
                            <div className="Shelf-logo"></div>
                        </Link>
                    </div>
                    <div className="Shelf-header">
                        <h1 className="Title">
                            {this.props.match.params.shelfname}
                        </h1>
                    </div>
                </header>
                {
                    this.state["Bin 1"]
                    ?
                    <Link to={bin1}>
                        <div className="bin Bin-1">Bin 1</div>
                    </Link>
                    :
                    <Link to={inventory + 'Bin 1/inventory'}>
                        <div className="bin Add-inventory">+ Add Inventory</div>
                    </Link>
                }
                {
                    this.state["Bin 2"]
                    ?
                    <Link to={bin2}>
                        <div className="bin Bin-2">Bin 2</div>
                    </Link>
                    :
                    <Link to={inventory + 'Bin 2/inventory'}>
                        <div className="bin Add-inventory">+ Add Inventory</div>
                    </Link>
                }
                {
                    this.state["Bin 3"]
                    ?
                    <Link to={bin3}>
                        <div className="bin Bin-3">Bin 3</div>
                    </Link>
                    :
                    <Link to={inventory + 'Bin 3/inventory'}>
                        <div className="bin Add-inventory">+ Add Inventory</div>
                    </Link>
                }
                {
                    this.state["Bin 4"]
                    ?
                    <Link to={bin4}>
                        <div className="bin Bin-4">Bin 4</div>
                    </Link>
                    :
                    <Link to={inventory + 'Bin 4/inventory'}>
                        <div className="bin Add-inventory">+ Add Inventory</div>
                    </Link>
                }
                {
                     this.state['Bin 5']
                    ?
                    <Link to={bin5}>
                        <div className="bin Bin-5">Bin 5</div>
                    </Link>
                    : 
                    <Link to={inventory + 'Bin 5/inventory'}>
                        <div className="bin Add-inventory">+ Add Inventory</div>
                    </Link>
                }
            </div>
        )
    }
}

