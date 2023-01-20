import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
//import products from "../json/productsArray.json";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";


const ItemDetailContainer = () =>{

    const [item, setItem] = useState([]);
    const {id} = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "products", id);
        
        getDoc(item).then((snapShot) => {
            console.log(snapShot.id);
            if (snapShot.exists()) {
                console.log(snapShot.price);
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("El producto no existe!");

            }
        });
    }, [id]);

    return(
        <div>
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
        
    )
}
export default ItemDetailContainer