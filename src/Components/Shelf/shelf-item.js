import React from 'react';
import { Link } from 'react-router-dom';

export default function ShelfItem(props){
    return (
        <Link to={props.bin1}>
            <div className="bin Bin-1">Bin 1</div>
        </Link>
    )
}