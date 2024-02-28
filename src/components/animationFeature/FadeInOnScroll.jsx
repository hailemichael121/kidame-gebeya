import { Box, useIsVisible } from "@chakra-ui/react";

const FadeInOnScroll = ({ children, ...props }) => {
  const { isVisible } = useIsVisible();

  return (
    <>
      <Box
        opacity={isVisible ? 1 : 0}
        transitionProperty="opacity"
        transitionDuration=".5s"
        transitionTimingFunction="ease-in-out"
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

export default FadeInOnScroll;
