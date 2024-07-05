import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={about_img}alt="" className='about-img'/>
        <img src={play_icon}alt="" className='play-icon' onClick={()=>
          {setPlayState(true)}
        }/>
        </div>
        <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorrow's leader Today</h2>
        <p>Embark on a transation educational journay with our
            university's comprehension education programs.our cutting-edge
            curriculam is designed to empower students with the knowleadge,
            skills,and experience needed to excel in the dynamic field of
            education.</p>
        <p>with a focus on innovation,hands-on learning,and personalised
            memtorship,our programs prepare aspiring educators to make a
            meaningful impact in classroom, schools,and communities.</p>
            <p> Whether you aspire to become a teacher, administrator,
                counselor, or educational leader, our diverse range of programs
                offers the perfect pathway to achieve your goals and unlock your
                full potential in shanine the future of education.
        </p>
        </div>
    </div>
  )
}

export default About