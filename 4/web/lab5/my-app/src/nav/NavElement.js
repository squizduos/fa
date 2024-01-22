function NavElement(props) {
    let className = "nav-link";
    if (props.category === props.selectedCategory) {
        className = "btn btn-danger";
    }
    return (
        <li className="nav-item">
            <a className={className} href="">
                {props.name}
            </a>
        </li>
    )
}

export default NavElement;