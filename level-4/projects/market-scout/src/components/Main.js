import React from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import Overview from "./pages/Overview";
import Financials from "./pages/Financials";
import StockPrices from "./pages/StockPrices";
import Tweets from "./pages/Tweets";

export default function Main(){


    const activePath = useLocation().pathname;
    const setActiveTab = toPath => {
        return activePath === toPath ? " active-tab" : "";
    }
    
    return (
        <main>
            <div className="report-selection">
                <Link to="/">
                        <span className={"report-selection-tab" + setActiveTab("/")}>Overview</span>
                </Link>
                <Link to="/Financials">
                        <span className={"report-selection-tab" + setActiveTab("/Financials")}>Financials</span>
                </Link>
                <Link to="/stock-prices">
                    <span className={"report-selection-tab" + setActiveTab("/stock-prices")}>Stock Prices</span>
                </Link>
                <Link to="/tweets">
                    <span className={"report-selection-tab" + setActiveTab("/tweets")}>Recent Tweets</span>
                </Link>
            </div>
            <Routes>
                    <Route path="/" element={<Overview />}></Route>
                    <Route path="/Financials" element={<Financials />}></Route>
                    <Route path="/stock-prices" element={<StockPrices />}></Route>
                    <Route path="/tweets" element={<Tweets />}></Route>
            </Routes>
        </main>
    )
}