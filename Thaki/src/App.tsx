/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/nav/NavBar";
import primaryColor from "./mainStyle";
import SideBar from "./components/side/SideBar";
import { Main } from "./components/main/Main";
import { useState } from "react";
export interface Category {
  id: number;
  title: string;
  languages: string[];
  graduate: string[];
  books: string[];
  info: string;
  description: string;
}

function App() {
  const [category, setCategory] = useState<Category[]>([]);
  const [categorySelected, setCategorySelected] = useState<string>("");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "15rem 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Box bg={primaryColor} h="full">
            <SideBar
              categorySelected={categorySelected}
              setCategorySelected={(category) => setCategorySelected(category)}
              // category={(categories_selected: Category[]) =>
              //   setCategory(categories_selected)
              // }
            />
          </Box>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box bg={primaryColor} minH="100vh">
          <Main categorySelected={categorySelected} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
