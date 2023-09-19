"use client";
import * as React from "react";
import Image, { StaticImageData } from "next/image";

type ShaderImageProps = {
  imageSrc: string | StaticImageData;
  alt?: string;
  specularSrc?: string;
};

const ShaderImage = ({ imageSrc, specularSrc, alt }: ShaderImageProps) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-full shader overflow-hidden">
      <Image
        src={imageSrc}
        alt={alt ?? ""}
        width="720"
        height="1920"
        className="absolute inset-0 w-full h-full object-cover"
        sizes="(min-width:1280px) 50vw, 100vw"
        priority
      />
      <div
        className="bg-black mix-blend-color-dodge z-20 absolute inset-0"
        style={{
          background: `linear-gradient(${
            (mousePosition.x + mousePosition.y) / 10
          }deg, black 20%, green, pink, yellow 80%, black)`,
        }}
      >
        <div
          className="absolute inset-0 z-20 bg-black mix-blend-multiply "
          style={{
            backgroundImage: `url(${specularSrc})`,
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default ShaderImage;
