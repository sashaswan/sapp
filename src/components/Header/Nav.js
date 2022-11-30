import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <nav>
            <ul className="main-navigation">
                <h1>navigation</h1>
                    {props.nav.map((item) => (
                        <li key={item.link}>
                            <NavLink to={item.link}>{item.text}</NavLink>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}
export default Nav