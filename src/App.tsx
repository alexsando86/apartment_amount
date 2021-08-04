import * as React from "react"
import {
  ChakraProvider,
  Grid,
  theme,
} from "@chakra-ui/react"
import ApartmentAmount from "./components/ApartmentAmount"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header";


export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({type:"LOAD_APT_AMOUNT"});
  }, [dispatch])

  return (
    <ChakraProvider theme={theme}>
      <Grid minH="100vh" p={3} gridTemplateRows="min-content">
        {/* <Header /> */}
        <ApartmentAmount />
      </Grid>
    </ChakraProvider>
  )
}
