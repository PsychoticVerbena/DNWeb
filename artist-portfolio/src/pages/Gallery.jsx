export default function Gallery() {
const images = [
    "/images/art1.jpg",
    "/images/art2.PNG",
  ];

  return (
    <div>
      <h1>Gallery</h1>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {images.map((img) => (
          <img
            key={img}
            src={img}
            alt=""
            style={{ width: "200px", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
}