import { useEffect , useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) =>{

    const {addItem} = useContext(CartContext)

    const [itemStock, setItemStock] = useState (0);

    const onAdd = (quantity) => {
        setItemStock (itemStock - quantity);
        addItem(item, quantity)
    }
    
    useEffect( () =>{
        setItemStock(item.stock)
    },[item])

    console.log(item.price);

    return (
        <div className="row align-items-center">
            <div className="col-md-4 offset-md-2">
                <img className="img-fluid" src={item.img} alt={item.name} />
            </div>
            <div className="col-md-4 offset-md-2 ">
                <h5 className="fs-1">{item.name}</h5>
                <p className="fs-4">{item.description}</p>
                <p className="fs-3">{item.price}</p>
                <ItemCount initial ={1} stock ={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;