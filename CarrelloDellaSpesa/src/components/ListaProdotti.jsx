import React, { useState } from 'react';

const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
];

function ListaProdotti() {
    const [addedProducts, setAddedProducts] = useState([]);

    function addToCart(product) {
        const isIncluded = addedProducts.some(p => p.name === product.name);
        if (!isIncluded) {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
        }
    }

    const elencoProdotti = products.map((product, index) => (
        <li key={index}>
            {product.name} - € {product.price}
            <div>
                <button onClick={() => addToCart(product)}>Aggiungi al carrello</button>
            </div>
        </li>
    ));

    return (
        <div>
            <ul>
                {elencoProdotti}
            </ul>

            {addedProducts.length > 0 && (
                <div>
                    <h2>Il tuo carrello</h2>
                    <ul>
                        {addedProducts.map((p, index) => (
                            <li key={index}>
                                {p.name} - € {p.price} - quantità: {p.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ListaProdotti;
