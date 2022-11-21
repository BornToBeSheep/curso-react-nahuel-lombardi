const ItemListContainer = ({greeting}) =>{
    return (
        <div>
            <div className="alert alert-warning text-center fs-2 rounded-0" role="alert">
                {greeting}
            </div>
        </div>
    )
}
export default ItemListContainer