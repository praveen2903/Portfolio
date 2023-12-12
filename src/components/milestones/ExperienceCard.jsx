import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IoIosArrowRoundForward } from "react-icons/io";
 
export default function ExperienceCard({image,title,description,link}) {
  return (
    <Card className="mt-6 w-64 md:w-96 mx-auto">
      <CardHeader shadow={false} floated={false} className="h-96 overflow-hidden">
        <img
          src={image}
          alt="card"
          className="object-cover h-full w-full"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-bold text-xl text-primary-dark dark:text-primary-light">
            {title}
          </Typography>
        </div>
        <Typography
          variant="small"
          className="font-normal opacity-75 text-primary-dark dark:text-primary-light text-justify"
        >
          {description}
        </Typography>
      </CardBody>
      
      <CardFooter className="pt-0">
        <a href={link}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-[#3b82f6] p-2 hover:bg-[#1d4ed8] flex gap-5 items-center justify-center"
          >
            view<IoIosArrowRoundForward size={35} />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}