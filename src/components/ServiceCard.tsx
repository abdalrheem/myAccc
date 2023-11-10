import {
  Center,
  Stack,
  Avatar,
  Box,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
interface Props {
  text: string;
  label: string;
  Imgsrc: string;
}

const ServiceCard = ({ text, label, Imgsrc }: Props) => {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        // eslint-disable-next-line react-hooks/rules-of-hooks

        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image src={Imgsrc} alt="Example" />
        </Box>
        <Stack>
          <Heading
            // eslint-disable-next-line react-hooks/rules-of-hooks
            fontSize={"2xl"}
            fontFamily={"body"}
            padding={5}
          >
            {label}
          </Heading>
          <Text color={"gray.500"}>{text}</Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default ServiceCard;
