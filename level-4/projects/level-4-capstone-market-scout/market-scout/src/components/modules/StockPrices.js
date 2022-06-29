import React, {useContext, useEffect, useState} from "react";
import Plot from 'react-plotly.js';
import useMeasure from "react-use-measure";
import {AppContext} from "../AppContext";
import PreloadModule from "./subcomponents/PreloadModule";

export default function StockPrices() {
    const {pricesData} = useContext(AppContext);
    const [plotWidth, setWidth] = useState(1500);
    const [plotHeight, setHeight] = useState(450);
    const [plotlyRef, bounds] = useMeasure()

    // implementation of useMeasure to make plotly expand/contract to window size.
    useEffect(() => {
        setWidth(Math.max(bounds.width, 200))
        setHeight(Math.max(bounds.height, 200))
    }, [bounds])

    return (
        <>
            <h2>Stock Prices</h2>
            {(pricesData !== undefined && Object.keys(pricesData).indexOf("layout") >= 0) ? 
                <div ref={plotlyRef} className="plotly-container module-container">            
                    <Plot data={pricesData.plotData} 
                        layout={
                            {...pricesData.layout, 
                            width : plotWidth,
                            height : plotHeight}}
                    />
                </div> : 
                <PreloadModule/>
            }
        </>
    )
}