import React, { useContext } from 'react'
import { ItemContext } from './Provider';

const Detail = ({ id, nama_barang, harga }) => {
    const { dispatch } = useContext(ItemContext)
    return (
        <li>
            {nama_barang} ({harga})
            <button className="button" onClick={() => dispatch({ type: 'HAPUS_DATA', payload: id})}>Hapus</button>
        </li>
    )
}

export default Detail;