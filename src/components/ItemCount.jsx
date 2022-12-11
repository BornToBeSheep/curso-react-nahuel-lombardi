import { useState } from "react";


const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const decrease = () => count > 1 && setCount (count -1);

    const increase = () => count < stock && setCount (count +1);

    const alCarrito = () => {
        if (stock > 0) {
            console.log("Agregaste " + count + " productos al carrito")
        }
        
    }

    /* Hay que restar en stock */


    return(
        <div>
            <div className="btn-group " role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-warning text-dark fs-1" onClick={decrease}>-</button>
                <button type="button" className="btn btn-outline-warning text-dark fs-1">{count}</button>
                <button type="button" className="btn btn-outline-warning text-dark fs-1" onClick={increase}>+</button>
            </div>
            <div>
                <button type="button" className="btn btn-outline-warning text-dark fs-1" onClick={alCarrito}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;