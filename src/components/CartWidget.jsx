const CartWidget =() =>{
    return(
        <div>
            <button type="button" className="btn position-relative">
                <a><img className="cart__img bg-warning rounded" src={"../img/cart-variant.svg"}  /></a>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    +1
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}
export default CartWidget;