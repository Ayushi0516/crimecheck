import { useState,createContext } from "react"


export const AppContext=createContext()

function AppContextProvider({children}){
    const [username,setusername]=useState("")

    function getname(value){
        setusername(value)
    }


return (
    <AppContext.Provider value={{username,getname}}>
        {children}
    </AppContext.Provider>
)

}


export default AppContextProvider