import {
  Card,
  CardBody,
  CardFooter,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import card_image from "../../assets/e.png";
import CardButton from "./CardButton";
import { LuLanguages } from "react-icons/lu";
import { PiBooksDuotone, PiGraduationCap } from "react-icons/pi";
import { TiInfoLarge } from "react-icons/ti";
import { cyan, primaryColor, yellow } from "../../mainStyle";
import { Category } from "../../App";
import InfoButton from "./InfoButton";

interface Props extends Category {}

export const CardItem = ({
  id,
  title,
  books,
  graduate,
  languages,
  description,
  info,
}: Props) => {
  return (
    <Card
      borderRadius={"2xl"}
      overflow={"heading"}
      height={"full"}
      bg={""}
      key={id}
      m={"0.5rem"}
    >
      <Center>
        <Image boxSize={"5rem"} borderRadius={"2xl"} src={card_image} />
      </Center>
      <CardFooter>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
          p={"0.15rem"}
          align={"center"}
          as="b"
          // fontSize={"1xl"}
        >
          {title}
        </Text>
      </CardFooter>
      <CardBody
        bg={"blackAlpha.400"}
        borderBottomRadius={"2xl"}
        overflow={"heading"}
      >
        <VStack justifyContent={"space-between"} bg={""}>
          <HStack
            spacing={"1"}
            paddingX={"5rem"}
            justifyContent={"space-around"}
          >
            <CardButton
              icon={<LuLanguages />}
              button_list={languages}
              color={primaryColor}
            />
            <CardButton
              icon={<PiGraduationCap />}
              button_list={graduate}
              color={yellow}
            />
            <CardButton
              icon={<PiBooksDuotone />}
              button_list={books}
              color={"#74A142"}
            />
            <InfoButton
              icon={<TiInfoLarge />}
              info={info}
              color={"blackAlpha.400"}
            />
          </HStack>
          <Text textAlign={"center"} textColor={cyan} as={"b"}>
            {description}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};
