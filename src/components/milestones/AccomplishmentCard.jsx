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
          <Card className="mt-6 mx-auto p-6">
          <CardHeader color="blue-gray" className="h-56 overflow-hidden">
            <img
              src={image}
              alt="card"
              className='object-cover h-full w-full'
            />
          </CardHeader>
          <CardBody className='p-3'>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-primary-dark">
              {title}
            </Typography>
            <Typography className='text-primary-dark'>
              {description}
            </Typography>
          </CardBody>
        </Card>
        </div>
    )
}

export default AccomplishmentCard;