import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const Cart = () =>{
    
    const {cart, cartTotal, clear, removeItem, toPay} = useContext(CartContext);
    
    if (cartTotal() === 0) {
        return(
            <div className="container">
                <div className="row m-5">
                    <div className="text-center col-md-12">
                        <div className="alert alert-warning fs-1" role="alert"> No se encontraron productos en el carrito</div>
                    </div>
                </div>
                
            </div>
        )
    }
    
    return(
        <div className="bg-dark">
            <div className=" bg-light container">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item =>(
                            <tr key={item.id}>
                                <td><img src={item.img} alt={item.name} width={60}/></td>
                                <td className="align-middle">{item.name}</td>
                                <td className="align-middle">{item.quantity}</td>
                                <td className="align-middle">${item.quantity * item.price}</td>
                                <td className="align-middle"><Link onClick={()=>{removeItem(item.id)}}><img src="/img/trash.svg"/></Link></td>
                            </tr>
                        ))}
                        <tr className="aling-middle ">
                            <td colSpan={3}>Total a pagar</td>
                            <td colSpan={3} className="text-end">${toPay()} </td>
                            
                        </tr>
                    </tbody>
                    <tr className="align-middle">
                        <th colSpan={2}><Link onClick={clear} className="btn btn-outline-danger">Vaciar Carrito</Link></th>
                        <th colSpan={2}><Link to={"/Checkout"} className="btn btn-outline-success text-end">Finalizar Compra</Link></th>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Cart