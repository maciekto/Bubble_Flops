import React from "react";
import '../Styles/ProductCard.css'

export default function ProductCard(props) {
    const {name, image, price} = props;
    return (
        <div className="ProductCard">
            <div className="ProductCard__Name">
                {name}
            </div>
            <img className="ProductCard__Name" src={image} alt={name} />
            <div className="ProductCard__Price">
                {price}
            </div>

        </div>
    )
}