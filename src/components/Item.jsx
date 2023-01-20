
import { Link } from "react-router-dom"

const Item = ({prod}) =>{

    return(
        <div className="col col-lg-4 p-4 bg-dark">
            <Link to={"/item/" + prod.id} className="text-decoration-none text-dark">
                <div className="card h-100 ">
                    <img src={prod.img} className="card-img-top" alt={prod.name} />
                    <div className="card-body">
                        <h5 className="card-title">{prod.description}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
} 

export {Item}