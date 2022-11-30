import { useParams,  NavLink} from "react-router-dom"

function CategoriesId() {
    let {categoryName} = useParams();
    return (
        <>
        <NavLink to='/categories' >Back</NavLink>
        <h1>Category Name : {categoryName}</h1>
        </>
    )
}
export default CategoriesId