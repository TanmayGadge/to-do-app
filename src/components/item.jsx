import React from 'react';

function Item(props){
    return(
        <div onClick={()=>{
            props.onChecked(props.id);
        }}>
            <li>{props.item}</li>
        </div>
    )
}

export default Item;