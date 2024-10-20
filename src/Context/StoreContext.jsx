import {createContext, useState, useEffect} from "react"
export const StoreContext = createContext(null);


const StoreContextProvider = (props) => {
    const [token , settoken] = useState("")
    const url ="http://localhost:4000";
    const contextValue = { url , token , settoken };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children} 
        </StoreContext.Provider>
    )
}

export default StoreContextProvider; 