import './../../css/style.css';
import Cart from '../Cart/Cart';
import Good from './Good'
import { useState } from 'react';

export default function Goods(props) {
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((item) => 
                    item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
                )
                // if (exist) {
                //     increase qty. by 1 for existing product
                //   } else {
                //     add new product to the cart items and set qty to 1
                //   }
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((item) =>
                item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
                )
            );
        }
    };
    return (
        <>
            <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            <div className="goods-block">
                {props.goods.map((product, idx) => (
                    <Good key={idx} product={product} onAdd={onAdd} />
                ))}
            </div>
        </>
    )
}