import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

   
  return (
    <div>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' bg='white'>
     <Image
        alt={title}
          src={imageSrc}
     />
         
        <Box
          mt='1'
          padding='5px'
          fontWeight='semibold'
          bg='white'
          color='black'
          as='h6'
          lineHeight='tight'

        >
          <Heading as='h5' size='sm'>{title}</Heading>
          <Text fontSize='xs' as='sub' color='grey'>{description}</Text>
          <Text padding='2px'>See more <FontAwesomeIcon icon={ faArrowRight} size='1x'/></Text>
          
        </Box>
      
      </Box>
    </div>
  );
};

export default Card;
