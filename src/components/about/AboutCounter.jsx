import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'ProjectsCounter', end: 28, duration: 2 });
	useCountUp({ ref: 'B.TechPercentage', end: 88, duration: 2 });
	useCountUp({ ref: 'BlogsCounter', end: 5, duration: 5 });
	useCountUp({ ref: 'SkillsCounter', end: 20, duration: 3 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="ProjectsCounter"
					counter={<span id="ProjectsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="B.TechPercentage"
					counter={<span id="B.TechPercentage" />}
					measurement="%"
				/>

				<CounterItem
					title="Blogs Counter"
					counter={<span id="BlogsCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Skills learned"
					counter={<span id="SkillsCounter" />}
					measurement="+"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
