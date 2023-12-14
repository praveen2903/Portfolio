import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../Variants';

const CounterItem = ({ title, counter, measurement }) => {
	return (
		<motion.div variants={fadeIn("right",0.4)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.3}} className="mb-20 sm:mb-0">
			<h2 className="text-4xl text-center text-secondary-dark dark:text-secondary-light mb-2">
				{counter} {measurement}
			</h2>
			<span className="font-general-regular block text-md text-center text-ternary-dark dark:text-ternary-light">
				{title}
			</span>
		</motion.div>
	);
};

export default CounterItem;
