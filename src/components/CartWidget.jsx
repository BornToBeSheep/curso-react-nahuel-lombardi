const CartWidget =() =>{
    return(
        <div>
            <button type="button" class="btn position-relative">
                <a><img className="cart__img bg-warning rounded" src={"img/cart-variant.svg"}  /></a>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    +1
                    <span class="visually-hidden">unread messages</span>
                </span>
            </button>
        </div>
    )
}
export default CartWidget;