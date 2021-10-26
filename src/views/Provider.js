import { createContext, useReducer } from "react"
import { data } from './data'

export const ItemContext = createContext()

const Context = ({ children }) => {

  const initialState = { data }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'TAMBAH_DATA':
        return { data: [action.payload, ...state.data] }

      case 'HAPUS_DATA':
        const newItem = state.data.filter((data) => data.id !== action.payload)
        return { data: newItem }
      default:
        return state.data
    }
  }

  const [itemReducer, dispatch] = useReducer(reducer, initialState)

  return (
    <ItemContext.Provider value={{ itemReducer, dispatch}}>
      {children}
    </ItemContext.Provider>
  )
}

export default Context;