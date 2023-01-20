import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
//import products from "../json/productsArray.json";
import {ItemList} from "./ItemList"
//import { Item } from "./Item";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer = () =>{

    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

/*      
//proceso para cargar nuestra lista de productos en firebase
    useEffect(() => {
        const db = getFirestore();   
        const itemCollection = collection(db, "products") 

        products.forEach((item) => {
            addDoc(itemCollection, item);
        })
    }, [])
*/ 
    useEffect (() => {
        const db = getFirestore();   
        const itemCollection = collection(db, "products");

        const q = id ? query(itemCollection, where("category", "==", id)) : itemCollection

        getDocs(q).then((snapshot) => {
            setListProducts(snapshot.docs.map((doc) => ({
                id:doc.id, ...doc.data()})
            ))
            setLoading(false);
    })}, [id])


    return (
        <div >
            {loading ? <Loading /> :<ItemList listProducts={listProducts}/> }
        </div>
    )
}
export default ItemListContainer