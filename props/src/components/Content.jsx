import "./component.css"

const Content = (props) => {
    return (
        <p>
            <span className="name">{props.name}</span> aka{" "}
            <span className="hero">{props.hero}</span>
        </p>
    )
}

export default Content;
