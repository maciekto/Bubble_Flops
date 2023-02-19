import React from "react";
import '../Styles/ProductCard.css'

export default function ProductCard(props) {
    const {id, products} = props;

    return (
        <div className="ProductCard">
            <div className="ProductCard__Name">
                {products[id].name}
            </div>
            <div className="ProductCard__Price">
                {/* {products[id].price} */}
            </div>
            <img className="ProductCard__Image" src={products[id].image} alt={products[id].name} />
            
            <div className="ProductCard__AddToCart" onClick={() => props.addToBasket(id)}>
                Add to cart
            </div>

        </div>
    )
}