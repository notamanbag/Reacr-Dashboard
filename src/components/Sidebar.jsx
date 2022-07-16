import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import {links} from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
const Sidebar = () => { 
  
  const {activeMenu,setactiveMenu,screenSize,currentColor} = useStateContext();


  const handleCloseSidebar = ()=>{ 
    if(activeMenu && screenSize<900){
      setactiveMenu(false)
    }

  }
  const activeLink = "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2"
  const normalLink = "flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md  dark:text-gray-200 dark:hover:text-black  hover:bg-light-gray m-2"

  
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
    
      {activeMenu && <>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={handleCloseSidebar} className='items-center gap-3 ml-3 mt-4 flex font-extrabold tracking-tight dark:text-white text-slate-900'> <SiShopware/> <span>SHoppy</span></Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type='button' className="text-xl rounded-r-full p-3 hover:bg-light-gray mt-4 block " onClick = {()=>setactiveMenu((prev)=>!prev)}><MdOutlineCancel/></button>
          </TooltipComponent>
        </div>
        <div className='mt-10 '>

          {links.map((link)=>(
            <div key={link.title} >
              <p className='text-gray-400 m-3 mt-4 uppercase '>{link.title}</p>
              {link.links.map((item)=>(
                <NavLink 
                  to={`/${item.name}`}
                  key={item.name}
                  onClick= {handleCloseSidebar}
                  style={({isActive})=>({backgroundColor:isActive?currentColor : ""})}  // The navlink is react companent which when destructed gives us isActive prop which we can use to highlt the current color
                  className={({isActive})=>(isActive ? activeLink : normalLink)}
                >
                  {item.icon}
                  <span className="capitalize">{item.name}</span> 
                </NavLink>
              ))}
            </div>
          ))}

        </div>
      </>}
    
    </div>
  )
}

export default Sidebar