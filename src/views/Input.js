import { useRef, useContext, useEffect, useState } from 'react'
import { ItemContext } from './Provider'

const Input = () => {
  const { dispatch } = useContext(ItemContext)
  const refNamaBarang = useRef()
  const refHarga = useRef()
  
  useEffect(() => {
    refNamaBarang.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: new Date().getTime().toString(),
      nama_barang: refNamaBarang.current.value,
      harga: refHarga.current.value
    }
    dispatch({ type: 'TAMBAH_DATA', payload: newItem })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="nama_barang">Nama Barang</label>
        <input ref={refNamaBarang} id="nama_barang" type="text" />
        <label for="harga">Harga Barang</label>
        <input ref={refHarga} id="harga" type="text" />
        <button className="button" type="submit">Simpan</button>
      </form>
    </>
  )
}

export default Input