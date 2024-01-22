import '../App.css';

function Card(props) {
    let cardText = "Недоступно";
    let btnClassName = "btn btn-secondary";
    if (props.data.available) {
        cardText = props.data.price + " руб."
        btnClassName = "btn btn-danger";
    }
    return (
        <div className="card me-auto cards-item" style={{ width: "18rem" }}>
            <img src={props.data.cover} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">
                    {props.data.title}
                </p>
                <a href={props.data.url} className={btnClassName}
                disabled={props.data.available ? false : true}>
                    {cardText}
                </a>
            </div>
        </div>

    )
}

export default Card;