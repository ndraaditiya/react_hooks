import React, {useState, createContext} from "react"
import Input from "./Input"
import Item from './Item'
import Context from "./Provider"

const List = () => {

    return (
        <Context>
            <h1>React Hooks</h1>
            <Input />
            <Item />
        </Context>
    )
}

export default List;