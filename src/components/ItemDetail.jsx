import ItemCount from "./ItemCount";

const ItemDetail = ({Item}) =>{
    
    console.log(Item.name)

    return (
        <div className="row align-items-center">
            <div className="col-md-4 offset-md-2">
                <img className="img-fluid" src={Item.img} alt={Item.name} />
            </div>
            <div className="col-md-4 offset-md-2 ">
                <h5 className="fs-1">{Item.name}</h5>
                <p className="fs-4">{Item.description}</p>
                <p className="fs-3">{Item.price}</p>
                <ItemCount initial ={1} stock ={Item.stock} onAdd={() =>{}} />
            </div>
        </div>
    )
}

export default ItemDetail;