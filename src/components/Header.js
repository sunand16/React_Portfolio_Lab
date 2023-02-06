import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  
  const handleClick = (anchor) => {
    anchor.preventDefault();
    const id = `${anchor.target.id}-section`;   
    console.log(anchor); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
   };
  //  useEffect = () => {
  //      window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //  });
  // }
  useEffect(() => {
    window.history.scrollRestoration = 'manual'    
    }, []);
   
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={-200}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
            <Link href="mailto: hello@example.com" target="_blank" className="social">
              <FontAwesomeIcon icon={ faEnvelope} size ="2x"/>
            </Link>
            <Link href="https://github.com" target="_blank" className="social">
              <FontAwesomeIcon icon={ faGithub} size ="2x"/>
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" className="social">
              <FontAwesomeIcon icon={ faLinkedin} size ="2x"/>
            </Link>
            <Link href="https://medium.com" target="_blank" className="social">
              <FontAwesomeIcon icon={ faMedium} size ="2x"/>
            </Link>
            <Link href="https://stackoverflow.com" target="_blank" className="social">
              <FontAwesomeIcon icon={ faStackOverflow} size ="2x"/>
            </Link>
            </HStack>
          </nav>
          <nav >
            <HStack spacing={8} >
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects-section" id='projects' onClick={handleClick}>Projects</a>
              <a href="/#contactme-section"  id="contactme" onClick={handleClick}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
