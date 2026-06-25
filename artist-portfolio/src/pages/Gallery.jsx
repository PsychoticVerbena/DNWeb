export default function Gallery() {
const images = [
    "/images/art1.jpg",
  ];

 return (
    <div className="section">
      <h1>Gallery</h1>

      <div className="grid">
        {images.map((img) => (
          <div className="card" key={img}>
            <img
              src={img}
              style={{
                width: "100%",
                borderRadius: "8px",
                display: "block"
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}