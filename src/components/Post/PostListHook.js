export default function PostListHook(props) {
    return (
        <div>
            {props.data.map((item, index) => (
                <div key={item.id}>
                    <h1>{index + 1}. {item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>
    )
}
