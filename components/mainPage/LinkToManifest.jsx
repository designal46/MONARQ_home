import React from "react";
import { Button, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LinkToManifest = () => {
  return (
    <GridItem
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      rowSpan={1}
      colSpan={1}
      textAlign="center"
    >
      <Link to="/manifest">
        <Text
          style={{
            padding: "10px 10px",
          }}
          textColor="brand.darkBl"
        >
          Need Help Making Your Manifest Object?
        </Text>
        <Button
          boxShadow="base"
          textColor="brand.gray"
          style={{
            padding: "10px 10px",
          }}
        >
          Manifest Object Creation
        </Button>
      </Link>
    </GridItem>
  );
};

export default LinkToManifest;
