import React from 'react'
import logo from '../images/navlogo.png';


import github from '../images/github.svg';
import discord from '../images/discord.svg';
import telegram from '../images/telegram.svg';
import twitter from '../images/twitter.svg'

import { motion } from "framer-motion";
const Navigator = () => {


  return (
    <div >

      <nav collapseOnSelect expand="sm" bg="black" variant="dark">

        <section className='navigator' href="./"> <motion.img
          initial={{ y: '-10rem' }}
          animate={{ y: '0rem' }}
          src={logo.src} className='logo' alt="logo" />     
          <a className='logohome' href='https://github.com/warthog-network'>   
            <p className='logohome2 logo1left ' ><img className='navlink' src={github.src} alt="logo" /></p>  
          </a>
          <a className='logohome' href='https://discord.com/invite/QMDV8bGTdQ'>   
            <p className='logohome2 logo1left ' ><img className='navlink' src={discord.src} alt="logo" /></p>  
          </a>
          <a className='logohome' href='https://t.me/warthognetwork'>   
            <p className='logohome2 logo1left ' ><img className='navlink' src={telegram.src} alt="logo" /></p>  
          </a>
          <a className='logohome' href='https://x.com/warthognetwork'>   
            <p className='logohome2 logo1left ' ><img className='navlink' src={twitter.src} alt="logo" /></p>  
          </a>


        </section>

      </nav>





    </div>


  )
}

export default Navigator