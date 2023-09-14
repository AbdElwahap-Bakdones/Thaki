/* eslint-disable @typescript-eslint/no-unused-vars */
import { VStack } from "@chakra-ui/react";
import { BiCut } from "react-icons/bi";
import { IoGameControllerSharp } from "react-icons/io5";
import { PiBooks } from "react-icons/pi";
import { AiOutlineCalculator } from "react-icons/ai";
import { MdOutlineScience } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { HiCode } from "react-icons/hi";
import Item from "./item";
import { useState } from "react";
interface Props {
  setCategorySelected: (category: string) => void;
  categorySelected: string;
}
export default function SideBar({
  categorySelected,
  setCategorySelected,
}: Props) {
  return (
    <VStack p={"1rem"} spacing={"1rem"}>
      <Item
        categorySelected={categorySelected}
        selectCategory={(category: string) => setCategorySelected(category)}
        icon={<BiCut />}
        text="Software Programs"
      />
      <Item
        categorySelected={categorySelected}
        selectCategory={(category) => setCategorySelected(category)}
        icon={<IoGameControllerSharp />}
        text="Games"
      />
      <Item
        categorySelected={categorySelected}
        selectCategory={(category) => setCategorySelected(category)}
        icon={<PiBooks />}
        text="Stories"
      />
      <Item
        categorySelected={categorySelected}
        selectCategory={(category) => setCategorySelected(category)}
        icon={<AiOutlineCalculator />}
        text="Maths"
      />
      <Item
        categorySelected={categorySelected}
        selectCategory={(category) => setCategorySelected(category)}
        icon={<MdOutlineScience />}
        text="Science"
      />
      <Item
        categorySelected={categorySelected}
        selectCategory={(category) => setCategorySelected(category)}
        icon={<GiMaterialsScience />}
        text="Cross-Curricular"
      />
      <Item
        categorySelected={categorySelected}
        selectCategory={(category) => setCategorySelected(category)}
        icon={<HiCode />}
        text="Tech & Coding"
      />
    </VStack>
  );
}
