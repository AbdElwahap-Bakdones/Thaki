import {
  Box,
  Center,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { cyan } from "../../mainStyle";
interface Props {
  icon: ReactNode;
  info: string;
  color: string;
}
export default function InfoButton({ icon, info, color }: Props) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        bg={color}
        border={"1px"}
        borderColor={"white"}
      >
        <Icon boxSize={"2.3rem"} color={"blackAlpha.600"}>
          {icon}
        </Icon>
      </MenuButton>
      <MenuList
        bg={color}
        borderRadius={0}
        border={"1px"}
        borderColor={"white"}
      >
        <Center>
          <Box bg={"red"} w={"main-content"}>
            <Text
              fontSize={"1.1rem"}
              p={"0.5rem"}
              w={"10rem"}
              textAlign={"center"}
              border={"2px"}
              bg={"white"}
              borderColor={color}
              color={cyan}
            >
              {info}
            </Text>
          </Box>
        </Center>
      </MenuList>
    </Menu>
  );
}
