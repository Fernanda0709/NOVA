import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const { totalItems, setIsCartOpen, isCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/productos", label: "Productos" },
    { to: "/nosotros", label: "Nosotros" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            NŌVA
          </Link>

          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <button
              className="cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Abrir carrito"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              <span className={menuOpen ? "line open" : "line"} />
              <span className={menuOpen ? "line open" : "line"} />
              <span className={menuOpen ? "line open" : "line"} />
            </button>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
