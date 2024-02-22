import React, { useState } from "react";
import { Grid, Box, Image, IconButton } from "@chakra-ui/react";
import { MdNavigateNext, MdArrowBackIosNew } from "react-icons/md";

import image1 from "../../assets/Image1 (1).jpg";
import image2 from "../../assets/Image2.jpg";
import image3 from "../../assets/Image3.jpg";
import image4 from "../../assets/Image4.jpg";
import image5 from "../../assets/Image5.jpg";
import image6 from "../../assets/Image6.jpg";
import image7 from "../../assets/Image7.jpg";

function ScrollableImageGrid() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3, image4, image5, image6, image7];
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={4}>
      <Box position="relative" justifyContent={"center"} alignItems={"center"}>
        <Image
          src={images[currentImageIndex]}
          alt=""
          width="100%"
          height="500px"
          objectFit={"cover"}
        />
        <IconButton
          icon={<MdNavigateNext />}
          position="absolute"
          top="50%"
          left="95%"
          backgroundColor={"chocolate"}
          transform="translate(-50%, -50%)"
          onClick={handleNextImage}
        />
        <IconButton
          icon={<MdArrowBackIosNew />}
          position="absolute"
          top="50%"
          left="5%"
          transform="translate(-50%, -50%)"
          onClick={handlePreviousImage}
          backgroundColor={"chocolate"}
        />
      </Box>
    </Grid>
  );
}

export default ScrollableImageGrid;
