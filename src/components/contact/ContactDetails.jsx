import { FaPhoneAlt } from 'react-icons/fa';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { HiMail } from 'react-icons/hi';
import {motion} from 'framer-motion'
const contacts = [
	{
		id: 1,
		name: 'Guntur, India',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'rokkamsaipraveen@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+91 7569522435',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full lg:w-1/4">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex" key={contact.id}>
							<i className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light text-[13px] md:text-[16px]">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
			<motion.div
				initial={{x:-100}}
				whileInView={{x:0}}
				transition={{duration:0.7}}>
				<div className="flex flex-col items-center justify-center gap-10 ">
					<div className="flex w-4/5 gap-2 md:flex-col items-center py-2 px-2 md:px-4 md:w-auto bg-stone-700 text-white rounded-md">
						<div>
							<FaPhoneAlt />
						</div>
						<p>+91 7565922445</p>
					</div>
					<div className="flex w-4/5 gap-2 md:flex-col items-center py-2 px-2 md:px-4 md:w-auto bg-stone-700 text-white rounded-md">
						<div>
						<HiMail />
						</div>
						<p>
						<a href="mailto:rokkamsaipraveen5l0@gmail.com" className="text-white cursor-pointer hover:text-white text-[12px] md:text-[16px]">rokkamsaipraveen5l0@gmail.com</a>
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ContactDetails;
