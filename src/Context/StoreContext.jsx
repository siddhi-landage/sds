import {createContext, useState, useEffect} from "react"
import axios from "axios"
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [token , settoken] = useState("");
    const [notice_list , set_notice_list] = useState([]);
    const url ="http://localhost:4000";

    const fetchnoticelist = async( ) => {
        const responce = await axios.get(url + "/api/notice/list")
        console.log(responce.data.data);
        console.log(notice_list);
        set_notice_list(responce.data.data)
    }

    useEffect(() => {
        fetchnoticelist();
      }, []);

    const contextValue = { url , token , settoken , notice_list };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children} 
        </StoreContext.Provider>
    )
}

export default StoreContextProvider; 