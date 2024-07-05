import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Programs.css';
import program_1 from '../../assets/program-1.png';
import program_2 from '../../assets/program-2.png';
import program_3 from '../../assets/program-3.png';
import program_i_1 from '../../assets/program-icon-1.png';
import program_i_2 from '../../assets/program-icon-2.png';
import program_i_3 from '../../assets/program-icon-3.png';

const Programs = () => {
  const navigate = useNavigate();

  const handleProgramClick = (program) => {
    navigate(`/register/${program}`);
  };

  return (
    <div className='programs'>
      <div className="program" onClick={() => handleProgramClick('Graduation')}>
        <img src={program_1} alt=""/>
        <div className="caption">
          <img src={program_i_1} alt=""/>
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program" onClick={() => handleProgramClick('Master')}>
        <img src={program_2} alt=""/>
        <div className="caption">
          <img src={program_i_2} alt=""/>
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program" onClick={() => handleProgramClick('Post Graduation')}>
        <img src={program_3} alt=""/>
        <div className="caption">
          <img src={program_i_3} alt=""/>
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
