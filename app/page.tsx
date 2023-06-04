import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  // url images
  const images = [
    "https://source.unsplash.com/random/480x240/?mountain",
    "https://source.unsplash.com/random/480x240/?fruit",
    "https://source.unsplash.com/random/480x240/?people",
    "https://source.unsplash.com/random/480x240/?dogs",
    "https://source.unsplash.com/random/480x240/?cat",
    "https://source.unsplash.com/random/480x240/?mountain",
    "https://source.unsplash.com/random/480x240/?fruit",
    "https://source.unsplash.com/random/480x240/?people",
    "https://source.unsplash.com/random/480x240/?dogs",
    "https://source.unsplash.com/random/480x240/?cat",
  ];

  return (
    <main className="p-10">
      <ImageSlider>
        {images.map((imageUrl, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={imageUrl} />
        ))}
      </ImageSlider>
    </main>
  );
}
