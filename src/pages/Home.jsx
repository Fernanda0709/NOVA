import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Colección 2026</p>
          <h1 className="hero-title">
            Diseño que <em>habita</em> contigo
          </h1>
          <p className="hero-sub">
            Piezas cuidadosamente seleccionadas para transformar tu espacio en
            algo memorable.
          </p>
          <Link to="/productos" className="hero-cta">
            Ver colección
          </Link>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
            alt="Sala de diseño"
          />
        </div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Destacados</h2>
          <Link to="/productos" className="section-link">
            Ver todos →
          </Link>
        </div>
        <div className="products-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="banner">
        <div className="banner-text">
          <h2>Envío gratuito en compras mayores a $300.000</h2>
          <p>Para todo el territorio colombiano. Entrega en 3 a 5 días hábiles.</p>
        </div>
        <Link to="/productos" className="hero-cta outline">
          Explorar productos
        </Link>
      </section>
    </main>
  );
}
