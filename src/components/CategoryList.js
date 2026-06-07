export default function CategoryButtons({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {Object.keys(categories).map((category) => (
        <button
          key={category}
          onClick={() =>
            setSelectedCategory(category)
          }
          style={{
            padding: "10px",
            cursor: "pointer",
            background:
              selectedCategory === category
                ? "#ff69b4"
                : "#e5e7eb",
            color:
              selectedCategory === category
                ? "#fff"
                : "#000",
            border: "none",
            borderRadius: "6px",
          }}
        >
          {category} (
          {categories[category].length})
        </button>
      ))}
    </div>
  );
}