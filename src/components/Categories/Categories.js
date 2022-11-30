import { NavLink, useLocation } from "react-router-dom"

function Categories(props) {
    const { match } = useLocation();
    return (
        <>
            <h1>Categories Page</h1>
            <NavLink to={`${match}/../notebooks`}><p>Notebooks</p></NavLink>
            <NavLink to={`${match}/../monitors`}><p>Monitors</p></NavLink>
            <NavLink to={`${match}/../mobilePhones`}><p>Mobile Phones</p></NavLink>
        </>
    )
}
export default Categories