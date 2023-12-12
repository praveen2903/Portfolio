import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";


const AccomplishmentCard = ({image,title,description}) => {
    return (
        <Card className="mt-6 w-64 md:w-96 mx-auto">
          <CardHeader color="blue-gray" className="h-56 overflow-hidden">
            <img
              src={image}
              alt="card"
              className='object-cover h-full w-full'
            />
          </CardHeader>
          <CardBody className='p-3'>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-primary-dark dark:text-primary-light">
              {title}
            </Typography>
            <Typography className='text-primary-dark dark:text-primary-light text-justify'>
              {description}
            </Typography>
          </CardBody>
        </Card>
    )
}

export default AccomplishmentCard;