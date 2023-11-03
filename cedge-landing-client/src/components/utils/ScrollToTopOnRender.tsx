import React, { useEffect } from "react";

const ScrollToTopOnRender: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // This effect runs only on component mount

  return null; // You can return null or any other content you want
};

export default ScrollToTopOnRender;
