import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import products from "../json/productsArray.json";
import {ItemList} from "./ItemList"


const ItemListContainer = () =>{

    const [listProducts, setListProducts] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        const promesa = new Promise((res, rej) =>{
            setTimeout(() =>{
                res(id ? products.filter(item => item.category == id): products);
            }, 2000)
        });
        promesa.then((data)=>{
            console.log(data)
            setListProducts(data);
        })
    }, [id])
    
    return (
        <div>
            <ItemList listProducts={listProducts}/> 
        </div>
    )
}
export default ItemListContainer