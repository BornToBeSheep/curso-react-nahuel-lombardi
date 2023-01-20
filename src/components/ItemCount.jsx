import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)
    const [itemStock, setItemStock] = useState(stock);
    const [sell, setSell] = useState(false);

    const decrease = () => count > 1 && setCount (count -1);

    const increase = () => count < itemStock && setCount (count +1);

    const addToCart = (quantity) =>{
        if (count <= itemStock){
            setCount(1);
            setItemStock (itemStock - quantity);
            setSell(true);
            onAdd(quantity);
        }
    }

    useEffect (()=>{
        setItemStock(stock)
    },[stock])
    /* Hay que restar en stock */


    return(
        <div>
            <div className="btn-group " role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-warning text-dark fs-1" onClick={decrease}>-</button>
                <button type="button" className="btn btn-outline-warning text-dark fs-1">{count}</button>
                <button type="button" className="btn btn-outline-warning text-dark fs-1" onClick={increase}>+</button>
            </div>
            <div>
                {sell ? <Link to={"/cart"} className="btn btn-outline-warning text-dark fs-1 ">Terminar mi compra</Link> : <button type="button" className="btn btn-outline-warning text-dark fs-1 " onClick={() =>{addToCart(count)}}>Agregar al carrito</button>}
            </div>
        </div>
    )
}

export default ItemCount;