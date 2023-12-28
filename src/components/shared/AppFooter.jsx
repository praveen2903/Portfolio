import {
	FiGithub,
	FiLinkedin,
	FiFacebook,
} from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";
import AppFooterCopyright from './AppFooterCopyright';
import { motion } from 'framer-motion';
import { fadeIn } from '../../Variants';

const socialLinks = [
	{
		id: 1,
		icon: <FiFacebook />,
		url: 'https://www.facebook.com/rokkam.saipraveen.3/',
	},
	{
		id: 2,
		icon: <FiGithub />,
		url: 'https://github.com/praveen2903',
	},
	{
		id: 3,
		icon: <FaXTwitter />,
		url: 'https://twitter.com/SaiPraveen2903',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/rokkam-sai-praveen-83043b237/',
	},
];

const AppFooter = () => {
	return (
		<motion.div variants={fadeIn("right",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.3}} className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-4xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</motion.div>
	);
};

export default AppFooter;
