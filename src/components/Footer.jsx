import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">NŌVA</span>
          <p>Diseño intencional para espacios que inspiran.</p>
        </div>
        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Contacto</h4>
          <ul>
            <li><a href="mailto:hola@nova.co">hola@nova.co</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} NŌVA. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
