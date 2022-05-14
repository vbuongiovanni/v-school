

export default function Card(props){
    const {place, price, timeToGo} = props;

    let priceIndicator = "$";
    priceIndicator += price >= 500 ? "$" : ""; 
    priceIndicator += price >= 1000 ? "$" : ""; 

    let containerClass = "card--container ";
    
    switch(timeToGo){
        case "Summer" :
            containerClass += "summer";
            break;
        case "Winter" : 
            containerClass += "winter";
            break;
        case "Fall" : 
            containerClass += "fall";
            break;
        case "Spring" : 
            containerClass += "spring"
            break;
        default: 
            containerClass += "other"
    }

    return (
        <div className={containerClass}>
            <h1 className="card-location">{place}</h1>
            <p className="price-indicator">{priceIndicator}</p>
            <p className="card-text"><span className="card-text-label">Best time to visit:</span> {timeToGo}</p>
            <p className="card-text"><span className="card-text-label">Price:</span> ${price}</p>
        </div>
    )

}