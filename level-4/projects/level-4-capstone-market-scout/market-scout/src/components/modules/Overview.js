import {React, useContext} from "react";
import {AppContext} from "../AppContext";
import CompanyOverview from "./subcomponents/CompanyOverview";
import PreloadModule from "./subcomponents/PreloadModule";

export default function Overview() {
    
    const {companyDetails} = useContext(AppContext);
    
    return (
        <>
            <h2>Company Overview</h2>
            {companyDetails !== undefined ?
                <CompanyOverview companyDetails={companyDetails}/> : <PreloadModule/>
                }
        </>
    )
}