import { GridItem } from "./GridItem";
import CaptionCarousel from "../CardCarousel";
import SlidingCard from "../SlidingCard";
import { categoryItem } from "../../services/api";
import CardCarousel from "../CardCarousel";
import { Box, Center } from "@chakra-ui/react";
interface Props {
  categorySelected: string;
}
export const Main = ({ categorySelected }: Props) => {
  // return <GridItem categorySelected={categorySelected} />;
  return (
    <Center p={"1rem"} h={"100%"}>
      <CardCarousel />
    </Center>
  );
};
