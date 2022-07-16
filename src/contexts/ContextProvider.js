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
    const [themeSettings, setThemeSettings] = useState(false);
    const [currentMode, setcurrentMode] = useState("Light");
    // const [themeSettings, setThemeSettings] = useState(false);
    const [currentColor, setcurrentColor] = useState("#03C9D7");
    
    const setMode = (e)=>{
        setcurrentMode(e.target.value)
        localStorage.setItem("themeMode",e.target.value)
        setThemeSettings(false)
    }
    
    const setColor = (e)=>{
        console.log(e)
        setcurrentColor(e)
        setThemeSettings(false)
        localStorage.setItem("colorMode",e)
    }
    
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
            setscreenSize,
            setColor,
            setMode,
            currentColor,
            currentMode,
            themeSettings,
            setThemeSettings,
           

        }}>
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = ()=>useContext(StateContext);