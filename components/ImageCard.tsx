import Image from "next/image";

type Props = {
  imageUrl: string;
};

export default function ImageCard({ imageUrl }: Props) {
  return (
    <div className="aspect-video relative flex[0_0_100%] h-64">
      <Image src={imageUrl} alt="" fill className="object-cover" unoptimized />
    </div>
  );
}
