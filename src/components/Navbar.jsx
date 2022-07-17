import React,{useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg'

import {UserProfile,Notification,Chat, Cart} from '.'
import { useStateContext } from '../contexts/ContextProvider'



const NavButton = ({title,cutomFunction,icon,color,dotColor}) =>(
  <TooltipComponent content={title} position="BottomCenter">
      <button type="button" onClick={cutomFunction} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray ">
        <span style={{background:dotColor}} className="absolute inline-flex w-2 h-2 right-2 top-2  rounded-full"/>{icon}
      </button>
  </TooltipComponent>
)
const Navbar = () => {
    const {setactiveMenu,isClicked,handleClick,screenSize, setscreenSize,currentColor} = useStateContext();
    console.log(currentColor)
    useEffect(() => {
      const handleSize = ()=>(setscreenSize(window.innerWidth))

      window.addEventListener('resize',handleSize)

      handleSize();
      return ()=>{window.removeEventListener('resize',handleSize)}
    });

    useEffect(() => {
      if(screenSize<=900){
        setactiveMenu(false)
      }
      else{
        setactiveMenu(true)
      }
       
    }, [screenSize]);
    //const handleClick = ()=>{}
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton title="Menu" cutomFunction={()=>(setactiveMenu((prev)=>!prev))} color={currentColor} icon={<AiOutlineMenu/>}/>
      <div className='flex'>
          <NavButton 
            title="Cart" 
            cutomFunction={()=>handleClick('cart')} 
            color={currentColor}
            icon={<FiShoppingCart/>}/>

          <NavButton 
            title="Chart" 
            dotColor="#03C9D7"
            cutomFunction={()=>handleClick('chat')} 
            color={currentColor} 
            icon={<BsChatLeft/>}/>
          
          <NavButton 
            title="Notification" 
            dotColor="#03C9D7"
            cutomFunction={()=>handleClick('notification')} 
            color={currentColor} 
            icon={<RiNotification3Line/>}/>
          
          <TooltipComponent content="Profile" position="BottomCenter">
            <div className="flex item-ceter gap-2 cursor-pointer rounded-lg p-1 hover:bg=light-gray" onClick={()=>handleClick('userProfile')}>
              <img
                src={avatar}
                className="rounded-full w-8 h-8"
                alt='avatar'
              ></img>
              <p>
                <span className="text-gray-400 text-14">Hi,</span> {' '}
                <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400 text-14"/>
            </div>
          </TooltipComponent>
          {isClicked.cart && <Cart/>}
          {isClicked.chat && <Chat/>}
          {isClicked.notification && <Notification/>}
          {isClicked.userProfile && <UserProfile/>}

      </div>
    </div>

    
  )
}

export default Navbar