import React, { useState } from "react";
import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, Textarea, VStack, Link } from "@chakra-ui/react";
import { FaPrint, FaPencilRuler, FaHandsHelping, FaEnvelope, FaPhone, FaHome } from "react-icons/fa";

const Home = () => (
  <VStack spacing={8}>
    <Image src="https://images.unsplash.com/photo-1643228995868-bf698f67d053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MDk5NzUzMDl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="3D Printing Technology" />
    <Section icon={<FaPencilRuler />} title="3D Designing" description="Our expert designers are ready to bring your ideas to life with modern 3D design techniques." imageSrc="https://images.unsplash.com/photo-1612888262725-6b300edf916c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMG1vZGVsaW5nfGVufDB8fHx8MTcwOTk3NTMwOXww&ixlib=rb-4.0.3&q=80&w=1080" />
    <Section icon={<FaPrint />} title="3D Printing" description="Utilizing state-of-the-art 3D printers, we provide high-quality prints in a variety of materials." imageSrc="https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXJ8ZW58MHx8fHwxNzA5OTc1MzA5fDA&ixlib=rb-4.0.3&q=80&w=1080" />
    <Section icon={<FaHandsHelping />} title="Consulting" description="Need guidance on a project? Our consultants can help optimize your product for 3D printing." imageSrc="https://images.unsplash.com/photo-1680536555364-9dd4a1ab313e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50aW5nJTIwY29uc3VsdGluZ3xlbnwwfHx8fDE3MDk5NzUzMDl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
  </VStack>
);

const ContactUs = () => (
  <Container centerContent>
    <VStack spacing={4} mt={8}>
      <Heading>Contact Us</Heading>
      <Box>
        <FaEnvelope /> <Link href="mailto:contact@3dprintsolutions.com">contact@3dprintsolutions.com</Link>
      </Box>
      <Box>
        <FaPhone /> <Link href="tel:+1234567890">+123 456 7890</Link>
      </Box>
      <Box>
        <FaHome /> 123 3D Print Street, Tech City, TX, 12345
      </Box>
      <ServiceRequestForm />
    </VStack>
  </Container>
);

const ServiceRequestForm = () => (
  <Box p={4} borderWidth="1px" borderRadius="lg">
    <VStack spacing={4}>
      <Input placeholder="Your Name" />
      <Input placeholder="Your Email" />
      <Textarea placeholder="Your Message" />
      <Button colorScheme="blue">Send Request</Button>
    </VStack>
  </Box>
);

const Section = ({ icon, title, description, imageSrc }) => (
  <Flex direction={["column", "row"]} alignItems="center" justifyContent="space-between" p={4}>
    <Box p={4}>
      <Heading size="md" mb={2}>
        {icon} {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
    <Image src={imageSrc} alt={title} boxSize="200px" objectFit="cover" borderRadius="md" />
  </Flex>
);

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => setCurrentPage(page);

  return (
    <Container maxW="container.xl">
      <Stack spacing={4} as="header" mt={4}>
        <Heading as="h1">3D Print Solutions</Heading>
        <Flex justifyContent="space-between">
          <Button onClick={() => navigate("home")} leftIcon={<FaHome />} colorScheme="teal">
            Home
          </Button>
          <Button onClick={() => navigate("contact")} leftIcon={<FaEnvelope />} colorScheme="teal">
            Contact Us
          </Button>
        </Flex>
      </Stack>
      {currentPage === "home" && <Home />}
      {currentPage === "contact" && <ContactUs />}
    </Container>
  );
};

export default Index;
