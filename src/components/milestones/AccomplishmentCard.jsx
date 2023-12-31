import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";


const AccomplishmentCard = ({image,title,description}) => {
    return (
        <div>
          <Card className="mt-6 p-6 mx-8 bg-primary-dark dark:bg-primary-light">
          <CardHeader color="blue-gray" className="h-56 overflow-hidden">
            <img
              src={image}
              alt="card"
              className='object-cover h-full w-full'
            />
          </CardHeader>
          <CardBody className='p-3'>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-primary-light dark:text-primary-dark">
              {title}
            </Typography>
            <Typography className='text-primary-light dark:text-primary-dark text-justify font-serif'>
              {description}
            </Typography>
          </CardBody>
        </Card>
        </div>
    )
}

export default AccomplishmentCard;