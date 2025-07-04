import React from 'react'
import './skills.css'
import './new.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      <h2 className='heading1 '>Projects</h2>
      <h3 className='heading2'>Programming Languages</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={90} fill="#03B0FD" txt="C++"/>
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Python"/>
          <SemiDonutChart percentage={85} fill="#03B0FD" txt="JavaScript"/>
          <SemiDonutChart percentage={85} fill="#03B0FD" txt="SQL"/>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>development technologies</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={95} fill="#03B0FD" txt="HTML"/>
            <SemiDonutChart percentage={65} fill="#03B0FD" txt="CSS"/>
            <SemiDonutChart percentage={85} fill="#03B0FD" txt="JavaScript"/>
          </div>
          <div className="flex">
            <SemiDonutChart percentage={80} fill="#03B0FD" txt="React"/>
            <SemiDonutChart percentage={95} fill="#03B0FD" txt="MongoDB"/>
            <SemiDonutChart percentage={65} fill="#03B0FD" txt="Flutter"/>
            <SemiDonutChart percentage={85} fill="#03B0FD" txt="Firebase"/>
          </div>
        </div>

         <motion.div
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>Tools</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={95} fill="#03B0FD" txt="Github"/>
            <SemiDonutChart percentage={75} fill="#03B0FD" txt="Linux"/>
            <SemiDonutChart percentage={85} fill="#03B0FD" txt="Postman"/>
          </div>
        </div>
      </motion.div>

      </motion.div>
    </motion.div>
  );
}

export default Skills;

