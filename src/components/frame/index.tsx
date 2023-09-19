import * as React from "react";
import Image, { StaticImageData } from "next/image";

type FrameProps = {
  children: React.ReactNode;
} & (
  | {
      imageSrc: string | StaticImageData;
    }
  | {
      imageComponent: React.ReactNode;
    }
);

const Frame = (props: FrameProps) => {
  const { children } = props;

  let El;

  if ("imageComponent" in props) {
    const { imageComponent } = props;
    El = imageComponent;
  } else {
    const { imageSrc } = props;
    El = (
      <Image
        src={imageSrc}
        alt="Picture of the author" //TODO: add correct alt text
        width="720"
        height="1920"
        className="lg:absolute inset-0 w-full  h-full object-cover "
        sizes="(min-width:1280px) 50vw, 100vw"
        priority
      />
    );
  }

  return (
    <div className="lg:flex">
      <div className="text-white bg-gray-300 lg:h-screen top-0 aspect-[4/5] lg:aspect-auto sticky lg:w-[45%]">
        {El}
      </div>
      <article className="lg:w-[55%] px-4 md:px-10 py-14 lg:py-32 lg:px-32 bg-white/70 backdrop-blur-sm z-10 relative">
        <div className="lg:max-w-[600px] h-full">{children}</div>
      </article>
    </div>
  );
};

export default Frame;
