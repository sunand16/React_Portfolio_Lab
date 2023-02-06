import React, {useEffect} from "react";
import {  useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";


  const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
    
   
  const formik = useFormik({
    initialValues: {
      firstName:'',
      email:'',
      type:'',
      comment: '',
    },
    
  
    onSubmit: () => {
      event.preventDefault();
      submit(formik.values);
      formik.values = formik.initialValues;
          },
     validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required')
        .min(6, 'Full Name must be at least 6 characters')
        .max(20, 'Full Name must not exceed 20 characters'),
       email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required('Required'),
      comment: Yup.string().min(25,'Must be at least 25 characters').max(150).required('Required'),
    }),
  });
  
  useEffect(() => {     
    if (response !== null && response.type=='success') {
      onOpen(response.type, response.message)
      formik.resetForm();
    }
     else if (response !== null && response.type=='error'){
       onOpen(response.type, response.message);
     }
  },[response]);
    
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          
          <form onSubmit={formik.handleSubmit} >
            <VStack spacing={4}>
             <FormControl isInvalid={false}>
              <FormLabel htmlFor="firstName">Name</FormLabel>
               <Input
                id="firstName"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
              <span className="error" style={{ color: 'red' }}>{formik.errors.firstName}</span>
              ) : null}     
            </FormControl>
               
                <FormControl isInvalid={false}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                 <Input
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && formik.errors.email ? (
              <span className="error" style={{ color: 'red' }}>{formik.errors.email}</span>
              ) : null}     
                
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps('type')}>
                    <option value="hireMe">Freelance project proposal</option>
                    <option value="openSource">Open source consultancy session</option>
                    <option value="other">Other</option>
                  </Select>
              </FormControl>
              
                <FormControl isInvalid={false}>
                  <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                  isInvalid={formik.touched.comment && formik.errors.comment}
                  />
                  {formik.touched.comment && formik.errors.comment ? (
              <span className="error" style={{ color: 'red' }}>{formik.errors.comment}</span>
              ) : null}     
                </FormControl>
              <Button disbaled={ isLoading} type="submit" colorScheme="purple" width="full">
                 {!isLoading ?  "Submit" :"Loading..."}
                </Button>
              </VStack>
            </form>
      
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
