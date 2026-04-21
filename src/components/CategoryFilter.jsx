import { categories } from "../data/products";

export default function CategoryFilter({ active, onSelect }) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`cat-btn ${active === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
}
