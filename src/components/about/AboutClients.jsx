import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {
	const { clientsData, clientsHeading } = useContext(AboutMeContext);

	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
				{clientsHeading}
			</p>
			<div className='flex items-center justify-center'>
				<div className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:mt-14 gap-10">
					{clientsData.map((client) => (
						<AboutClientSingle
							title={client.title}
							image={client.img}
							description={client.description}
							link={client.link}
							key={client.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutClients;
