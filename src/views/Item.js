import React, { useContext, useEffect, useState } from "react"
import Detail from './Detail'
import { ItemContext } from "./Provider"
import axios from 'axios'

const Item = () => {
    
    const { itemReducer } = useContext(ItemContext)

    return (
        <ul>
            {itemReducer.data.map((data) => {
                return (
                    <Detail key={data.id} {...data} />
                )
                       
            })}
        </ul>
    )
}

export default Item;