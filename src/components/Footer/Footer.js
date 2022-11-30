import Nav from "../Header/Nav.js"
function Footer(props) {
    return (
        <footer>
            <h1>Footer</h1>
            <Nav nav={props.data.nav}/>
        </footer>

    )
}
export default Footer