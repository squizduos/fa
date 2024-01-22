import Nav from "./nav/Nav";
import Logo from "./nav/Logo";

function Header(props) {
    return (
        <header>
            <Logo />
            <Nav categories={props.categories} />
        </header>
    )
}

export default Header;