import React from 'react';
import web from '../src/images/img1.svg'
import {NavLink} from 'react-router-dom';
import Common from './Common';

const About = () => {
  return (
    <> 
     
     <Common 
     name= "Welcome to about page" 
     imgsrc={web} visit='/contact' 
     btnname="Contact Now" />
    
    </>
  )
}
export default About;