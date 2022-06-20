import React, {useContext, useEffect, useRef, useState} from "react";
import Plot from 'react-plotly.js';
import useMeasure from "react-use-measure";
import {AppContext} from "../AppContext";


export default function StockPrices() {
    const {company, pricesData} = useContext(AppContext);
    const [plotWidth, setWidth] = useState(1500);
    const [plotlyRef, bounds] = useMeasure()
    let renderContent;

    // console.log(bounds)
    
    useEffect(() => {
        setWidth(bounds.width)
    }, [bounds])

    // 
    if (pricesData !== undefined && Object.keys(pricesData).indexOf("layout") >= 0) {
        let {layout, plotData} = pricesData;
        renderContent =  (<Plot data={plotData} layout={{...layout, width : plotWidth}}/>)
    } else {
        renderContent =  (<h1>Loading...</h1>)
    }

    return (
        <div ref={plotlyRef} className="plotly-container">
            <h1>Stock Prices of {company.name}</h1>
            {renderContent}
        </div>
    )
}