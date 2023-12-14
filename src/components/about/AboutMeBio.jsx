import profileImage from '../../images/profile.png';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import { motion } from 'framer-motion';
import { fadeIn } from '../../Variants';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<motion.div variants={fadeIn("right",0.4)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.3}} className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</motion.div>

			<motion.div variants={fadeIn("left",0.7)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.3}} className="font-general-regular w-full sm:w-3/4 text-left">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</motion.div>
		</div>
	);
};

export default AboutMeBio;
