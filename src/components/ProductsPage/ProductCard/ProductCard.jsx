import React, {useState} from "react";

// CSS STYLES
import './ProductCard.css'

export default function ProductCard(props) {
    const [valid, setValid] = useState(false)

    const {id, products} = props;

    if(!valid) {
        if(products[id] != undefined) { 
            setValid(true)
        }
    }
    

    return (
        <> {valid ?
            <div className="ProductCard">
            <div className="ProductCard__Name">
                {products[id].name}
            </div>
            <div className="ProductCard__Price">
                {products[id].price.dolar}$
            </div>
            <img className="ProductCard__Image" src={products[id].image} alt={products[id].name} />
            
            <div className="ProductCard__AddToCart" onClick={() => props.addToBasket(id)}>
                Add to cart
            </div>

        </div>    
        : null}
        </>
    )
}