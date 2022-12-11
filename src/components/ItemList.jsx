import {Item} from "./Item"


const ItemList = ({listProducts}) => {

    return(
        <div className="row">
            {listProducts.map(prod => 
                <Item key={prod.id} prod={prod}/>
            )}
        </div>
    )
}
export {ItemList}