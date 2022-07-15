import {React,createContext,useContext,useState} from 'react'

const StateContext = createContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false

}

export const ContextProvider = ({children})=>{

    const [activeMenu, setactiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState);
    const [screenSize, setscreenSize] = useState(undefined);
    const handleClick = (clicked)=>{
        console.log(clicked);
        setisClicked({...initialState,[clicked]:true})
        console.log(initialState);
    } // only changing the clicked option to true
    return (
        <StateContext.Provider value={{
            activeMenu,
            setactiveMenu,
            isClicked,
            setisClicked,
            handleClick,
            screenSize, 
            setscreenSize

        }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = ()=>useContext(StateContext);