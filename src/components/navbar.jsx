import React from 'react'
import logo from '../images/Warthog_2024_Full Logo.svg';


import github from '../images/github.svg';
import discord from '../images/discord.svg';
import telegram from '../images/telegram.svg';
import twitter from '../images/twitter.svg'

import { motion } from "framer-motion";
const Navigator = () => {


  return (
    <div >

      <nav >
      <section className='flexrow' href="./">   
        <motion.img
          initial={{ y: '-10rem' }}
          animate={{ y: '0rem' }}
          src={logo.src} className='logo' alt="logo" />
             <div className='flexrow mt-3'>
         <a className='logohome ' href='/getstarted'>   
            <p className='logohome2 logo1left ' >GET STARTED</p>  
          </a>
          <a className='logohome' href='/news'>   
            <p className='logohome2 logo1left ' >NEWS</p>  
          </a>
          <a className='logohome' href='https://www.warthog.network/docs/'>   
            <p className='logohome2 logo1left ' >DOCS</p>  
          </a>
          <a className='logohome' href='/faqs'>   
            <p className='logohome2 logo1left ' >FAQS</p>  
          </a>
          <a className='logohome' href='https://wartscan.io/'>   
            <p className='logohome2 logo1left ' >EXPLORER</p>  
          </a>
          </div>



       <div className='flexrow absolute top-0 right-0'>
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
          </div>
        </section>

      </nav>





    </div>


  )
}

export default Navigator