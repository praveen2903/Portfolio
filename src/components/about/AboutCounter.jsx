import React, { useRef, useState } from 'react';
import { useCountUp } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import CounterItem from './CounterItem';

const AboutCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsCounterRef = useRef(null);
  const techPercentageCounterRef = useRef(null);
  const blogsCounterRef = useRef(null);
  const skillsCounterRef = useRef(null);

  const projectsCounter = useCountUp({
    ref: projectsCounterRef,
    start: isVisible ? null : 0, // Start from 0 if not visible initially
    end: 28,
    duration: 2,
  });

  const techPercentageCounter = useCountUp({
    ref: techPercentageCounterRef,
    start: isVisible ? null : 0,
    end: 88,
    duration: 2,
  });

  const blogsCounter = useCountUp({
    ref: blogsCounterRef,
    start: isVisible ? null : 0,
    end: 5,
    duration: 5,
  });

  const skillsCounter = useCountUp({
    ref: skillsCounterRef,
    start: isVisible ? null : 0,
    end: 20,
    duration: 3,
  });

  const handleVisibilityChange = (visible) => {
    if (visible && !isVisible) {
      setIsVisible(true);
      projectsCounter.reset();
      techPercentageCounter.reset();
      blogsCounter.reset();
      skillsCounter.reset();
    }
  };

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <VisibilitySensor onChange={handleVisibilityChange}>
          <CounterItem
            title="ProjectsCounter"
            counter={<span ref={projectsCounterRef}>{projectsCounter.countUp}</span>}
            measurement=""
          />
        </VisibilitySensor>

        <VisibilitySensor onChange={handleVisibilityChange}>
          <CounterItem
            title="B.TechPercentage"
            counter={<span ref={techPercentageCounterRef}>{techPercentageCounter.countUp}</span>}
            measurement="%"
          />
        </VisibilitySensor>

        <VisibilitySensor onChange={handleVisibilityChange}>
          <CounterItem
            title="Blogs Counter"
            counter={<span ref={blogsCounterRef}>{blogsCounter.countUp}</span>}
            measurement=""
          />
        </VisibilitySensor>

        <VisibilitySensor onChange={handleVisibilityChange}>
          <CounterItem
            title="Skills learned"
            counter={<span ref={skillsCounterRef}>{skillsCounter.countUp}</span>}
            measurement="+"
          />
        </VisibilitySensor>
      </div>
    </div>
  );
};

export default AboutCounter;