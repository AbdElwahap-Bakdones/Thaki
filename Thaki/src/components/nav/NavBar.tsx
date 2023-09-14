import { Box, HStack, Icon, Image } from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import { AiFillTag } from "react-icons/ai";
import { LiaLanguageSolid } from "react-icons/lia";

import thaki_logo from "../../assets/thaki-logo.png";
import home from "../../assets/menu.png";
import primaryColor from "../../mainStyle";
// import tags from "../assets/menu1.png";
// import search from "../assets/menu/1.png";
export default function NavBar() {
  return (
    <HStack bg={""} justifyContent="space-between" marginY={"2.5rem"}>
      <Image
        src={thaki_logo}
        // boxSize="10rem"
        height={"20%"}
        width={"25%"}
        objectFit={"contain"}
        alt="Thaki logo"
      />

      <Box>
        <HStack>
          <Box>
            <Image src={home} objectFit={"contain"} />
          </Box>
        </HStack>
        {/* <Icon aria-label={""}>
            <IoHome />
          </Icon>
          <Icon fontSize={"25px"} aria-label={""}>
            <AiFillTag />
          </Icon>
          <Icon aria-label={""}>
            <LiaLanguageSolid />
          </Icon> */}
      </Box>

      <Icon
        boxSize={"5rem"}
        width={"7%"}
        bg={primaryColor}
        borderLeftRadius={"2xl"}
        color={"white"}
      >
        <LiaLanguageSolid />
      </Icon>
    </HStack>
  );
}
