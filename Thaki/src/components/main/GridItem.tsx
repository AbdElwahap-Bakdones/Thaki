import { SimpleGrid } from "@chakra-ui/react";
import { CardItem } from "./CardItem";
import { categoryItem } from "../../services/api";
import { useState } from "react";

interface Props {
  categorySelected: string;
}
export const GridItem = ({ categorySelected }: Props) => {
  const [slider, setSlider] = useState(0);
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      spacing={3}
      paddingY={"3rem"}
      paddingX={"1.5rem"}
    >
      {categoryItem(categorySelected, 8).map((i) => (
        <CardItem
          key={i.id}
          id={i.id}
          languages={i.languages}
          books={i.books}
          description={i.description}
          graduate={i.graduate}
          info={i.info}
          title={i.title}
        />
      ))}
    </SimpleGrid>
  );
};
