import react from 'react';


const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
];


function ListaProdotti() {

    const elencoProdotti = products.map((prodotto, index) => (
        <li key={index}>
            {prodotto.name} - € {prodotto.price}
        </li>
    ));

    return (
        <div>
            <ul>
                {elencoProdotti}
            </ul>
        </div>
    )


}

export default ListaProdotti;