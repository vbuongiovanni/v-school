import React, {useContext} from "react";
import {AppContext} from "../AppContext";
import FinancialsDataSheet from "./subcomponents/FinancialsDataSheet";

export default function Financials() {

    const {company, companyFinancials} = useContext(AppContext);

    return (
        <>
            <h1>Financials of {company.name}</h1>
            <div className="overview-container module-container">
                {companyFinancials !== undefined && <FinancialsDataSheet/>}
            </div>
        </>
    )
}