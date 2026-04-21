import { useState, useMemo } from "react";
import { products } from "../data/products";

export function useProducts() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory !== "todos") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === "name") result = [...result].sort((a, b) => a.name.localeCompare(b.name));

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return { filtered, activeCategory, setActiveCategory, searchQuery, setSearchQuery, sortBy, setSortBy };
}
