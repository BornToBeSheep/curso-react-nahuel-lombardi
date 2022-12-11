import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import products from "../json/productsArray.json";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{

    const [Item, setItem] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        const promesa = new Promise((res, rej) =>{
            setTimeout(() =>{
                res(products.find(item => item.id === parseInt(id)))
            }, 2000)
        });
        promesa.then((data)=>{
            setItem(data);
        })
    }, [id])

    return(
        <div>
            <ItemDetail Item={Item}/>
        </div>
        
    )
}
export default ItemDetailContainer