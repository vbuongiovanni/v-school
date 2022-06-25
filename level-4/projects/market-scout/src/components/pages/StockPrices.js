import React, {useContext, useEffect, useState} from "react";
import Plot from 'react-plotly.js';
import useMeasure from "react-use-measure";
import {AppContext} from "../AppContext";

export default function StockPrices() {
    const {company, pricesData} = useContext(AppContext);
    const [plotWidth, setWidth] = useState(1500);
    const [plotHeight, setHeight] = useState(450);
    const [plotlyRef, bounds] = useMeasure()
    let renderContent;

    useEffect(() => {
        setWidth(Math.max(bounds.width - 10, 200))
        setHeight(Math.max(bounds.height - 5, 200))
    }, [bounds])

    // 
    if (pricesData !== undefined && Object.keys(pricesData).indexOf("layout") >= 0) {
        let {layout, plotData} = pricesData;

        
        renderContent =  (<Plot data={plotData} layout={
                {...layout, 
                width : plotWidth,
                height : plotHeight
            }}/>)
    } else {
        renderContent =  (<h1>Loading...</h1>)
    }

    return (
        <>
            <h1>Stock Prices of {company.name}</h1>
            <div ref={plotlyRef} className="plotly-container module-container">
                {renderContent}
            </div>
        </>
    )
}