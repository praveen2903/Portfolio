import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
  } from "@material-tailwind/react";
  import { IoIosArrowRoundForward } from "react-icons/io";
   
  export default function AboutClientSingle({image,title,description,link}) {
	return (
	  <Card className="w-full max-w-[26rem] shadow-lg mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
		<CardHeader floated={false} color="blue-gray">
		  <img
			src={image}
			alt="ui/ux review check"
			className="h-[500px] w-[500px]"
		  />
		</CardHeader>
		<CardBody>
		  <div className="mb-3 flex items-center justify-between">
			<Typography variant="h5" color="blue-gray" className="font-bold text-center">
			  {title}
			</Typography>
		  </div>
		  <Typography color="gray">
			{description}
		  </Typography>
		</CardBody>
		<CardFooter className="pt-3">
		  <a href={link}>
			<Button size="lg" fullWidth={true} className="bg-[#3b82f6] p-2 hover:bg-[#1d4ed8] flex gap-5 items-center justify-center">
				View<IoIosArrowRoundForward size={35} />
			</Button>
		  </a>
		</CardFooter>
	  </Card>
	);
  }

