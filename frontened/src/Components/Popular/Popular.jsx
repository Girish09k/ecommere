import React, {useState, useEffect} from "react";
import "./Popular.css";
//import data_product from '../Assets/data';
import Item from '../Item/Item';  // Ensure Item is imported from the correct path

const Popular = () => {
    const [popularProducts,setPopularProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/popularinwomen')
        .then((resposne)=>resposne.json())
        .then((data)=>setPopularProducts(data));
    },[])
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular__items">
                {popularProducts.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Popular;
