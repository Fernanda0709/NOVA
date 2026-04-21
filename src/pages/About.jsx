export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1 className="page-title">Nosotros</h1>
        <p className="about-lead">
          NŌVA nació de la convicción de que el diseño bien hecho transforma la vida cotidiana.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-text">
          <h2>Nuestra filosofía</h2>
          <p>
            Creemos en piezas que duran. Trabajamos directamente con artesanos y fabricantes
            que comparten nuestra ética: materiales sostenibles, procesos responsables,
            y un cuidado genuino por el detalle.
          </p>
          <p>
            Cada producto en nuestra tienda pasa por un proceso de selección riguroso.
            Si no lo pondríamos en nuestro propio espacio, no lo vendemos.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=700&q=80"
            alt="Espacio de diseño NŌVA"
          />
        </div>
      </section>

      <section className="values-section">
        <h2>Valores</h2>
        <div className="values-grid">
          {[
            { icon: "◈", title: "Autenticidad", desc: "Cada pieza tiene una historia y un origen verificable." },
            { icon: "◉", title: "Sostenibilidad", desc: "Materiales naturales y procesos que respetan el planeta." },
            { icon: "◎", title: "Durabilidad", desc: "Diseño intemporal que mejora con el paso de los años." },
            { icon: "◇", title: "Comunidad", desc: "Apoyamos a fabricantes locales y redes de comercio justo." },
          ].map((v) => (
            <div key={v.title} className="value-card">
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
