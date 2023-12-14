import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
function AppFooterCopyright() {
	return (
		<motion.div variants={fadeIn("up",0.7)} initial="hidden" whileInView={"show"} viewport={{once:false,amount:0.3}} className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/praveen2903/Portfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Rokkam Sai Praveen Portfolio
				</a>
				
			</div>
		</motion.div>
	);
}

export default AppFooterCopyright;
