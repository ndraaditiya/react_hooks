import React, { useState, createContext, useEffect} from "react"
import Input from "./Input"
import Item from './Item'
import Context from "./Provider"
import axios from 'axios'

const List = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get(`https://catfact.ninja/fact`)
        .then((res) => {
            setData(res.data?.fact)
            console.log(`nyobain catfact api ${res.data?.fact}`)
        })
    }

    return (
        <Context>
            <h1>React Hooks</h1>
            <Input />
            <Item />
            <p>
                <span style={{fontWeight: 'bold'}}> Random cat's fact: </span><br/>
                <span style={{fontSize: 15, marginLeft: 10, marginRight: 10}}>{data}</span>
            </p>
            <br/>
        </Context>
    )
}

export default List;
