export default function Shop() {
   const items = [
    {
      name: "Full Body Commission",
      price: "$50+",
      link: "https://ko-fi.com/artistname"
    },
    {
      name: "Stickers / Prints",
      price: "$5–$20",
      link: "https://gumroad.com/artistname"
    }
  ];

  return (
    <div>
      <h1>Shop</h1>

      {items.map((item) => (
        <div key={item.name} style={{ marginBottom: "20px" }}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <a href={item.link} target="_blank">
            Purchase
          </a>
        </div>
      ))}
    </div>
  );
}