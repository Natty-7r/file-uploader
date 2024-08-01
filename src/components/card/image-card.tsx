import { cn } from "@/lib/utils";
import Image from "next/image";

const ImageCard = ({ src, className }: any) => {
  return (
    <div className={cn("relative  aspect-[3/2] ", className)}>
      <Image
        alt="New York"
        className="object-fill  absolute top-0 left-0 w-full h-full"
        src={src}
        fill
      />
    </div>
  );
};

export default ImageCard;
