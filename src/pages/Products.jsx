import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";

export default function Products() {
  const {
    filtered,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
  } = useProducts();

  return (
    <main className="products-page">
      <div className="products-header">
        <h1 className="page-title">Colección</h1>

        <div className="products-controls">
          <div className="search-wrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="default">Ordenar por</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="name">Nombre A–Z</option>
          </select>
        </div>
      </div>

      <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />

      {filtered.length === 0 ? (
        <div className="no-results">
          <p>No se encontraron productos.</p>
          <button onClick={() => { setSearchQuery(""); setActiveCategory("todos"); }}>
            Limpiar filtros
          </button>
        </div>
      ) : (
        <>
          <p className="results-count">{filtered.length} producto{filtered.length !== 1 ? "s" : ""}</p>
          <div className="products-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
