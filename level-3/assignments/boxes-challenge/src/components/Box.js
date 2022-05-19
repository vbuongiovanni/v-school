import React, {useState} from "react"

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    
    return (
        <div 
            style={styles}
            onClick={() => props.handler(props.id)}
            key={props.id}
            className="box">
        </div>
    )
}