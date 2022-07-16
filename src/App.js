import React,{useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Footer, Navbar, Sidebar, ThemeSettings } from './components'
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Customers, Ecommerce, Editor, Employees, Financial, Kanban, Line, Orders, Pie, Pyramid, Stacked } from './pages'
import { useStateContext } from './contexts/ContextProvider'
import './App.css'
const App = () => {
    const {activeMenu, themeSettings,setThemeSettings,currentColor,currentMode} = useStateContext();

  return (
    <div className={currentMode==='Dark'?'dark':''}>
        <BrowserRouter>
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent content="Settings" position="top">
                       {/* //The only reason we have not enterd color blue in class name because we will have to dynamically change them  */}
                        <button type='button' onClick={()=>{setThemeSettings(true)}} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white ' style={{background:currentColor,borderRadius:'50%'}}>
                            <FiSettings/>
                        </button>

                    </TooltipComponent>
                </div>
            {activeMenu ?
            (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar/>
            </div>)
            :(
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar/>
            </div>
            )}
            <div className= {`dark:bg-main-dark-bg bg-main-bg min-h-screen ${activeMenu ? 'md:ml-72 w-full ' :'  w-full flex-2'}`}>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                    <Navbar/>

                </div>
            
                <div>
                { themeSettings && <ThemeSettings/>}
                    <Routes>
                        {/* DashBoard */}
                        <Route path="/" element={<Ecommerce/>}/>
                        <Route path="/ecommerce" element={<Ecommerce/>}/>
                        {/* Pages */}
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/employees' element={<Employees/>}/>
                        <Route path='/customers' element={<Customers/>}/>

                        {/* Apps */}
                        <Route path='/kanban' element={<Kanban/>}/>
                        <Route path='/editor' element={<Editor/>}/>
                        <Route path='/calendar' element={<Calendar/>}/>
                        <Route path='/color-picker' element={<ColorPicker/>}/>

                        {/* Charts */}
                        <Route path='/line' element={<Line/>}/>     
                        <Route path='/bar' element={<Bar/>}/>          
                        <Route path='/area' element={<Area/>}/> 
                        <Route path='/pie' element={<Pie/>}/>   
                        <Route path='/financial' element={<Financial/>}/>     
                        <Route path='/color-mapping' element={<ColorMapping/>}/>
                        <Route path='/pyramid' element={<Pyramid/>}/>
                        <Route path='/stacked' element={<Stacked/>}/>


                    </Routes>
                </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App