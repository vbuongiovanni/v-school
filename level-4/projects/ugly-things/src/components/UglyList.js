import React, {useContext} from "react";
import ListEntry from "./ListEntry";
import {UglyContext} from "./UglyContext";

export default function UglyList() {

    const {uglyData} = useContext(UglyContext);

    return (
        <div id="ugly-list--main">
            {uglyData.map((listItem, index) => (
                    <ListEntry
                        key={index}
                        itemDetail={listItem}
                    />
                ))
            }
        </div>
    )
}