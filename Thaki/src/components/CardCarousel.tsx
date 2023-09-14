import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Icon } from "@chakra-ui/react";
import { CardItem } from "./main/CardItem";
import { categoryItem } from "../services/api";
import { yellow } from "../mainStyle";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const CustomDots = (dots: any) => (
  <ul style={{ display: "flex", justifyContent: "center" }}>
    {dots.map((dot: any, index: any) => (
      <li key={index}>
        <span
          style={{
            display: "block",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: dot.props.className.includes("slick-active")
              ? yellow // Active dot color
              : "gray", // Inactive dot color
            margin: "0 5px",
            cursor: "pointer",
          }}
        />
      </li>
    ))}
  </ul>
);

const CustomNextArrow = (props: any) => (
  <div className="custom-arrow custom-next" onClick={props.onClick}>
    <AiOutlineArrowRight />
    &gt;
  </div>
);
export default function CardCarousel() {
  // Define the initial settings for the slider
  const initialSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
  };

  // Define responsive settings based on screen width
  const [responsiveSliderSettings, setResponsiveSliderSettings] = useState(
    initialSliderSettings
  );

  useEffect(() => {
    const breakpoints = [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          rows: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          rows: 3,
        },
      },
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ];

    // Find the responsive settings based on the current screen width
    const currentWidth = window.innerWidth;
    const responsiveSetting = breakpoints.find(
      (breakpoint) => currentWidth >= breakpoint.breakpoint
    );

    // Update the slider settings if a responsive setting is found
    if (responsiveSetting) {
      setResponsiveSliderSettings(responsiveSetting.settings);
    } else {
      // Use the initial settings if no responsive setting is found
      setResponsiveSliderSettings(initialSliderSettings);
    }

    // Update the slider settings when the window is resized
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const responsiveSetting = breakpoints.find(
        (breakpoint) => currentWidth >= breakpoint.breakpoint
      );

      if (responsiveSetting) {
        setResponsiveSliderSettings(responsiveSetting.settings);
      } else {
        setResponsiveSliderSettings(initialSliderSettings);
      }
    };

    // Add a resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const items = categoryItem("opo", 22);
  return (
    <Box w={"75vw"} paddingBottom={"3rem"} paddingRight={"1rem"}>
      <Slider
        // prevArrow={<CustomPrevArrow />}
        appendDots={CustomDots}
        dots
        {...responsiveSliderSettings}
      >
        {items.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </Slider>
    </Box>
  );
}
