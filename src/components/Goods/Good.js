import './../../css/style.css';
export default function Good(props) {
    const { product } = props;
    return (
        <>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className="add-to-cart" data-key={product.id} onClick={() => props.onAdd(product)}>Add to cart</button>
        </>
    )
}