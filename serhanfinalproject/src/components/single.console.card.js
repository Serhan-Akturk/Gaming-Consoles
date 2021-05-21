export default function Singleconsolecard(props) {
    return (
        <div className="card"style={{height: "100%"}}>
            <img style={{height: "340px"}}src={props.console.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.console.name}</h5>
                    <button onClick={() => props.setSelectedConsole(props.console.id)}className="btn btn-primary">Select</button>
                </div>
            </div>
    )
}