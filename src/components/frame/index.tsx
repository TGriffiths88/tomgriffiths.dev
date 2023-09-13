import * as React from "react";
import Image from "next/image";

type FrameProps = {
  imageSrc: string;
  children: React.ReactNode;
};

const Frame = ({ imageSrc, children }: FrameProps) => {
  return (
    <div className="lg:flex">
      <div className="text-white bg-gray-300 lg:w-full lg:h-screen top-0 aspect-[4/5] lg:aspect-auto sticky">
        <Image
          src={imageSrc}
          alt="Picture of the author"
          width="720"
          height="1920"
          className="lg:absolute inset-0 w-full h-full object-cover saturate-0"
          sizes="(min-width:1280px) 50vw, 100vw"
          priority
        />
      </div>
      <article className="lg:w-full px-4 lg:px-10 py-14 lg:py-32 bg-white z-10 relative">
        {children}
      </article>
    </div>
  );
};

export default Frame;
