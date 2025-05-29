import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Fixed */}
      <header className="main-header">
        <div className="logo">
          <span className="logo-icon">JL</span>
          <span className="logo-text">JuventudLab</span>
        </div>
        <a href="/register" className="register-btn">
          Registrarse
        </a>
      </header>

      {/* Hero Section (Full Viewport) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Tu <span>primer trabajo</span> mientras estudias
          </h1>
          <p className="hero-subtitle">
            Conectamos estudiantes con empleadores que valoran tu formación
          </p>
          <div className="hero-cta">
            <a href="/register" className="primary-cta">
              Comenzar ahora
            </a>
            <a href="/how-it-works" className="secondary-cta">
              Cómo funciona
            </a>
          </div>
        </div>
        <div className="scroll-down">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-title">
          <h2>Beneficios exclusivos para estudiantes</h2>
          <p>Diseñado pensando en tus necesidades académicas</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🕒</div>
            <h3>Horarios flexibles</h3>
            <p>Trabaja cuando no tengas clases o exámenes</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏫</div>
            <h3>Cerca de tu universidad</h3>
            <p>Oportunidades laborales a minutos de tu campus</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Relacionado a tu carrera</h3>
            <p>Gana experiencia en tu campo de estudio</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-title dark">
          <h2>Lo que dicen nuestros usuarios</h2>
          <p>Estudiantes reales, experiencias reales</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "Gracias a JuventudLab conseguí un trabajo que me permite pagar
              mis estudios y ganar experiencia en mi área"
            </p>
            <div className="user-info">
              <div className="user-avatar">M</div>
              <div className="user-details">
                <h4>María González</h4>
                <p>Estudiante de Ingeniería</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <p>
              "Los empleadores aquí entienden que somos estudiantes primero.
              ¡Totalmente recomendado!"
            </p>
            <div className="user-info">
              <div className="user-avatar">C</div>
              <div className="user-details">
                <h4>Carlos Mendoza</h4>
                <p>Estudiante de Administración</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta-section">
        <h2>¿Listo para empezar?</h2>
        <p>
          Regístrate ahora y accede a las mejores oportunidades laborales para
          estudiantes
        </p>
        <a href="/register" className="cta-button">
          Crear cuenta gratis
        </a>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">JL</span>
              <span className="logo-text">JuventudLab</span>
            </div>
            <p>Conectando el talento estudiantil desde 2025</p>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Empresa</h4>
              <a href="/about">Sobre nosotros</a>
              <a href="/team">Nuestro equipo</a>
              <a href="/careers">Carreras</a>
            </div>

            <div className="link-column">
              <h4>Recursos</h4>
              <a href="/blog">Blog</a>
              <a href="/guides">Guías</a>
              <a href="/faq">Preguntas frecuentes</a>
            </div>

            <div className="link-column">
              <h4>Legal</h4>
              <a href="/privacy">Privacidad</a>
              <a href="/terms">Términos</a>
              <a href="/cookies">Cookies</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 JuventudLab. Todos los derechos reservados.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">
              📸
            </a>
            <a href="#" aria-label="Twitter">
              🐦
            </a>
            <a href="#" aria-label="LinkedIn">
              💼
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
