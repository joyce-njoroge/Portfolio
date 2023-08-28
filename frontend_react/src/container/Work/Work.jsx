import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import { images } from '../../constants';

const Work = () => {

  const sampleWorks = [
    {
        image: '',
        projectLink: 'https://github.com/joyce-njoroge/Budget-tracker-app',
        codeLink: 'https://github.com/joyce-njoroge/Budget-tracker-app',
        title: 'Budget tracker application',
        description: 'The Budget Tracker Application is a command-line tool that helps you track and manage your budgets and transactions.',
        tags: ['CLI'],
    },
    {
      image: '',
      projectLink: 'https://github.com/joyce-njoroge/rental-radar',
      codeLink: 'https://github.com/joyce-njoroge/rental-radar',
      title: 'Rental Radar Application',
      description: 'A modern fullstack app that helps tenants and landlords smooth out the renting process',
      tags: ['Web Apps'],
    },
    {
      image: '',
      projectLink: '',
      codeLink: 'https://github.com/joyce-njoroge/ecommerce-sanity-nextjs',
      title: 'Ecommerce App',
      description: 'A fullstack project where you can purchase produts and pay using lipa na Mpesa',
      tags: ['Web Apps'],
    }

  ];  

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    // You can directly set the sample data as the initial state
    setWorks(sampleWorks);
    setFilterWork(sampleWorks);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      
      <div className="app__work-filter">
        {['CLI', 'Web Apps', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={images.hack} alt="profile_bg" />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
        
      </motion.div>
      {/* Button to GitHub projects */}
      <a
            href="https://github.com/joyce-njoroge"
            target="_blank"
            rel="noreferrer"
            className="github-projects-button"
      >
            My GitHub Projects
      </a>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);