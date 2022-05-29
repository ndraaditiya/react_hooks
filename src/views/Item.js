import React, { useContext, useEffect } from "react"
import Detail from './Detail'
import { ItemContext } from "./Provider"
import axios from 'axios'

const Item = () => {
    const { itemReducer } = useContext(ItemContext)

    useEffect(() => {
        getData()
    }, [])
    
    const getData = () => {
        axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2022-04-29&sortBy=publishedAt&apiKey=629cdf10aeb34331b5c775b6f3cbf77f`)
        .then((res) => {
            if (res.data.status == 'ok'){
                const { articles } = res.data
                console.log(`nyobain newsapi`)
                console.log(articles)
            }
        })
    }

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