import React, {useContext} from "react";
import {AppContext} from "../AppContext";
import FinancialsDataSheet from "./subcomponents/FinancialsDataSheet";
import PreloadModule from "./subcomponents/PreloadModule";

export default function Financials() {

    const {companyFinancials, setCompanyFinancials} = useContext(AppContext);

    return (
        <>
            <h2>Financials</h2>
            {companyFinancials !== undefined ? 
                <FinancialsDataSheet companyFinancials={companyFinancials} setCompanyFinancials={setCompanyFinancials}/> : 
                <PreloadModule/>
            }
        </>
    )
}