import react from "react";

export default function(props){
    const squareColor = props.color;
    return (
        <div className="dj-square" style={{backgroundColor: squareColor}}>
        </div>
    )
}
