import { Button, HStack, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { secondaryColor, yellow } from "../../mainStyle";
interface Props {
  icon: ReactNode;
  text: string;
  selectCategory: (string: string) => void;
  categorySelected: string;
}
export default function item({
  icon,
  text,
  categorySelected,
  selectCategory,
}: Props) {
  return (
    <HStack width={"14rem"}>
      <Icon
        boxSize={categorySelected === text ? "4.5rem" : "3.5rem"}
        color={categorySelected === text ? yellow : secondaryColor}
      >
        {icon}
      </Icon>
      <Button
        variant="ghost"
        paddingBottom={"1rem"}
        color={categorySelected === text ? "white" : "gray.400"}
        onClick={() => selectCategory(text)}
      >
        {text}
      </Button>
    </HStack>
  );
}
