import React, { HTMLProps } from "react";

interface ImageProps extends HTMLProps<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, ...restProps }) => {
  return <img src={src} alt={alt} className={className} {...restProps} />;
};

export default Image;
