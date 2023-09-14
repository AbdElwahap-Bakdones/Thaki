/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useState } from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { CardItem } from "../components/main/CardItem";
import { Category } from "../App";

interface Props {
  cards: Category[];
  count: number;
}
const SlidingCard = ({ cards, count }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? count - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === count - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Flex p={"0.5rem"} alignItems="center" justifyContent="center">
      <Icon
        onClick={handlePrevClick}
        aria-label="Previous"
        boxSize={"3rem"}
        mr={4}
      >
        <MdOutlineArrowBackIosNew />
      </Icon>
      <Box>
        <CardItem
          key={cards[currentIndex].id}
          id={cards[currentIndex].id}
          languages={cards[currentIndex].languages}
          books={cards[currentIndex].books}
          description={cards[currentIndex].description}
          graduate={cards[currentIndex].graduate}
          info={cards[currentIndex].info}
          title={cards[currentIndex].title}
        />
      </Box>
      <Icon onClick={handleNextClick} boxSize={"3rem"} aria-label="Next" ml={4}>
        <MdOutlineArrowForwardIos />
      </Icon>
    </Flex>
  );
};

export default SlidingCard;
