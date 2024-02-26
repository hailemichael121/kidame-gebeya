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
      <Card className="Item_card" maxW="sm">
        <CardBody className="Item_card-body">
          <ItemImage />
          <ItemTxt />
        </CardBody>
        <Divider />
        <CardFooter className="Item_card-footer">
          <ButtonGroup spacing="50" className="Item_card-BtnGroup">
            <AddToCartBtn />
            <BuyNowBtn />
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default ItemCard;
