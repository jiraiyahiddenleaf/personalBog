import React from 'react'
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa';
import {FaGoodreadsG} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import "./footer.scss"

const footer = () => {
  return (
    <div className='footer'>
      <div className='social_links'>
            <a href='https://github.com/jiraiyahiddenleaf'><div className='icon'><FaGithub/></div></a>
            <a href='https://www.linkedin.com/in/jiraiya-hiddenleaf-8b6939249/'><div className='icon'><FaLinkedin/></div></a>
            <a href='https://twitter.com/akshattalapa'><div className='icon'><BsTwitter/></div></a>
            <a href='https://www.instagram.com/akshattalapa/'><div className='icon'><FaInstagram/></div></a>
            <a href='https://www.goodreads.com/akshattalapa'><div className='icon'><FaGoodreadsG/></div></a>
            <a href='mailto:akshattalapa27@gmail.com'><div className='icon'><MdEmail/></div></a>
        </div>
             <h4>© 2023 Akshat Talapa</h4>
    </div>
  )
}

export default footer
