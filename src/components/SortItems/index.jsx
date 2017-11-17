import React from 'react'

import './index.css'
import Item from './Item'
// const SortItem=(item)=>{
//     <li key={item.cate_id} className="sort-item">
//     <a className="sort-item-box">
//         <img className="sort-item-thum" src={item.game_src} alt=""/>
//         <p className="sort-item-title">{item.game_name}}</p>
//         <div className="sort-item-shadow">

//         </div>
//     </a>
//     </li>
// }

export default function SortItems (props){
        const items=props.items.slice(0);
        return (
            <div>
                { items.length>0?
                    items.map((item)=>
                       {
                           console.log(item);
                           return <Item key={item.cate_id} item={item}/>;
                       }
                    )    
                    :
                    <div>Loading</div>}
            
            </div>
        );
}