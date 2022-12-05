import './../../css/style.css';

export default function Cart(props) {
    const { cartItems, onAdd,  onRemove} = props;
    return (
        <>
            <div className="container">
                <h1>Cart</h1>
                <div className="goods-field">
                    {cartItems.length === 0 && <div>Cart is empty</div>}
                    {cartItems.map((item) => (
                        <div key={item.id} className="row">
                            <div className="col-2">{item.name}</div>
                            <div className="col-2 text-right">
                                <img src={item.image} alt='' />
                                {item.qty} x ${item.price.toFixed(2)}
                            </div>
                            <div>
                                <button onClick={() => onRemove(item)} className="remove">
                                    -
                                </button>{' '}
                                <button onClick={() => onAdd(item)} className="add">
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}