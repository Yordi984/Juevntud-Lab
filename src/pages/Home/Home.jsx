import React, { useEffect } from "react";
import "./Home.css";

function App() {
  useEffect(() => {
    // Animación del subtítulo y CTA (ya están visibles en el HTML)

    // Efecto de aparición para las secciones al hacer scroll
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observar elementos que deben aparecer al hacer scroll
    document
      .querySelectorAll(".feature-card, .testimonial-card")
      .forEach((card) => {
        observer.observe(card);
      });
  }, []);

  return (
    <div className="home-container">
      {/* Header modificado con elementos de flexjobs */}
      <header className="main-header">
        <div className="logo">
          <img
            src="/logo.jpg"
            alt="Logo de la empresa"
            className="logo-img"
            width="300"
            height="auto"
          />
        </div>

        <div className="auth-buttons">
          <a href="/LoginEstudiante" className="login-btn">
            Iniciar sesión
          </a>
          <a href="/Elegir" className="register-btn">
            Regístrate
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="title-animation">
            Construye algo <span className="highlight-word">increíble</span>
            <span className="cursor">|</span>
          </h1>
          <p className="hero-subtitle visible">
            Nuestra plataforma te ayuda a crear proyectos asombrosos con
            herramientas poderosas y un diseño intuitivo.
          </p>
          <div className="hero-cta visible">
            <a href="/login" className="primary-cta">
              Comenzar ahora
              <span className="hover-effect"></span>
            </a>
            <a href="/Demo" className="secondary-cta">
              Ver demo
              <span className="hover-effect"></span>
            </a>
          </div>
        </div>
        <div className="scroll-down">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-title">
          <h2>Características principales</h2>
          <p>
            Descubre todo lo que nuestra plataforma puede ofrecerte para
            impulsar tu productividad y creatividad
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Rápido y eficiente</h3>
            <p>
              Optimizado para ofrecer el mejor rendimiento incluso en
              dispositivos con recursos limitados.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Personalizable</h3>
            <p>
              Ajusta cada aspecto de la plataforma para que se adapte
              perfectamente a tus necesidades.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Seguro</h3>
            <p>
              Tus datos están protegidos con cifrado de última generación y
              copias de seguridad automáticas.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Colaborativo</h3>
            <p>
              Trabaja en equipo en tiempo real con herramientas diseñadas para
              la colaboración eficiente.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Analíticas</h3>
            <p>
              Obtén insights valiosos con nuestros dashboards y herramientas de
              análisis integradas.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-plug"></i>
            </div>
            <h3>Integraciones</h3>
            <p>
              Conecta con tus herramientas favoritas a través de nuestra API y
              extensiones.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-title dark">
          <h2>Lo que dicen nuestros usuarios</h2>
          <p>Miles de equipos en todo el mundo confían en nuestra plataforma</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              Esta plataforma ha transformado completamente nuestra forma de
              trabajar. La colaboración en tiempo real y las herramientas
              integradas nos han ahorrado cientos de horas.
            </p>
            <div className="user-info">
              <div className="user-avatar">M</div>
              <div className="user-details">
                <h4>María González</h4>
                <p>CEO, TechSolutions</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              Como desarrollador, aprecio especialmente la API bien documentada
              y las integraciones fluidas. Ha sido un cambio radical en nuestra
              productividad.
            </p>
            <div className="user-info">
              <div className="user-avatar">C</div>
              <div className="user-details">
                <h4>Carlos Martínez</h4>
                <p>CTO, DevTeam</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              La curva de aprendizaje fue mínima y en menos de una semana todo
              el equipo estaba usando la plataforma a pleno rendimiento.
              ¡Increíble!
            </p>
            <div className="user-info">
              <div className="user-avatar">A</div>
              <div className="user-details">
                <h4>Ana López</h4>
                <p>Directora de Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <h2>¿Listo para comenzar?</h2>
        <p>
          Únete a miles de equipos que ya están transformando su forma de
          trabajar con nuestra plataforma.
        </p>
        <a href="#" className="cta-button">
          Crear cuenta gratis
        </a>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">L</div>
              <div className="logo-text">Logo</div>
            </div>
            <p>
              Construimos herramientas poderosas para equipos ambiciosos.
              Nuestra misión es ayudarte a alcanzar tu máximo potencial.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Producto</h4>
              <a href="#">Características</a>
              <a href="#">Precios</a>
              <a href="#">Integraciones</a>
              <a href="#">Actualizaciones</a>
            </div>
            <div className="link-column">
              <h4>Recursos</h4>
              <a href="#">Documentación</a>
              <a href="#">Tutoriales</a>
              <a href="#">API</a>
              <a href="#">Comunidad</a>
            </div>
            <div className="link-column">
              <h4>Empresa</h4>
              <a href="#">Nosotros</a>
              <a href="#">Blog</a>
              <a href="#">Carreras</a>
              <a href="#">Contacto</a>
            </div>
            <div className="link-column">
              <h4>Legal</h4>
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
              <a href="#">Seguridad</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 NombreEmpresa. Todos los derechos reservados.</p>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
