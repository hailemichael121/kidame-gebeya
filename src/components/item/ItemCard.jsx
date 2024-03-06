import React from "react";
import {
  Card,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
} from "@chakra-ui/react";
import { BuyNowBtn, AddToCartBtn, ItemTxt, ItemImage } from "../../components";

const ItemCard = () => {
  return (
    <>
      <Card
        className="Item_card"
        maxW="xl"
        bg="GrayText"
        borderRadius="10px 70px 1px 1px"
        overflow="hidden"
        margin="10px"
        pl="15px"
        pb="15px"
        boxShadow="dark-lg"
      >
        <CardBody className="Item_card-body">
          <ItemImage />
          <ItemTxt />
        </CardBody>
        <Divider />
        <CardFooter className="Item_card-footer">
          <ButtonGroup spacing="2">
            <AddToCartBtn />
            <BuyNowBtn />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemCard;
