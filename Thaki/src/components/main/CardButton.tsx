import {
  Box,
  Center,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  icon: ReactNode;
  button_list: string[];
  color: string;
}
export default function CardButton({ icon, button_list, color }: Props) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        bg={color}
        border={"1px"}
        borderColor={"white"}
      >
        <Icon boxSize={"75%"} color={"blackAlpha.600"}>
          {icon}
        </Icon>
      </MenuButton>
      <MenuList
        bg={color}
        borderRadius={0}
        border={"1px"}
        borderColor={"white"}
      >
        <Box bg={"color"} p={"0.5rem"}>
          {button_list.map((item) => (
            <MenuItem key={item} border={"2px"} borderColor={color}>
              {item}
            </MenuItem>
          ))}
        </Box>
      </MenuList>
    </Menu>
  );
}
