import React from "react";
import '../Styles/ProductCard.css'

export default function ProductCard(props) {
    const {name, image, price} = props;
    console.log(image);
    return (
        <div className="ProductCard">
            <div className="ProductCard__Name">
                {name}
            </div>
            <div className="ProductCard__Price">
                {price}
            </div>
            <img className="ProductCard__Image" src={image} alt={name} />
            
            <div className="ProductCard__AddToCart">
                Add to cart
            </div>

        </div>
    )
}