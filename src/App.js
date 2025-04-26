// Dormroom Studios Website (Simplified)
import React, { useEffect } from "react";

const games = [
  {
    title: "Echoes of Yesterday",
    description: "A haunting narrative-driven mystery unraveling a forgotten past.",
    image: "/images/echoes.jpg",
    link: "https://play.google.com/store/apps/details?id=echoes.of.yesterday"
  },
  {
    title: "Midnight Train",
    description: "A surreal journey through dreams and decisions aboard a phantom train.",
    image: "/images/midnight.jpg",
    link: "https://play.google.com/store/apps/details?id=midnight.train"
  },
  {
    title: "Letters Unsent",
    description: "Piece together an emotional story through discovered letters and choices.",
    image: "/images/letters.jpg",
    link: "https://play.google.com/store/apps/details?id=letters.unsent"
  }
];

export default function DormroomStudios() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#111", color: "#fff", fontFamily: "sans-serif" }}>
      <nav style={{ display: "flex", justifyContent: "center", padding: "16px", backgroundColor: "#000", gap: "24px", position: "sticky", top: 0, zIndex: 10 }}>
        <a href="#games" style={{ color: "#66ccff", textDecoration: "none" }}>Our Games</a>
        <a href="#about" style={{ color: "#66ccff", textDecoration: "none" }}>About</a>
        <a href="#contact" style={{ color: "#66ccff", textDecoration: "none" }}>Contact</a>
      </nav>

      <header style={{ backgroundColor: "#000", padding: "40px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <img src="/images/logo.png" alt="Dormroom Studios Logo" style={{ height: "60px" }} />
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>Dormroom Studios</h1>
        </div>
        <p style={{ color: "#aaa", fontSize: "1.1rem", maxWidth: "800px", margin: "24px auto 0", textAlign: "center" }}>
          We craft immersive single-player mobile games where stories come first. At Dormroom Studios, we believe games should feel like novels you can't put down. Every tap, every choice, and every silence reveals more about the world and characters you’ve stepped into. 
          Whether it’s uncovering lost memories, exploring surreal landscapes, or reading emotional letters left behind, our games are designed to leave an impact long after the screen goes dark.
        </p>
      </header>

      <section id="games" style={{ padding: "0 24px 48px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "24px" }}>Our Games</h2>
        <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {games.map((game, index) => (
            <div key={index} style={{ backgroundColor: "#222", border: "1px solid #333", borderRadius: "16px", overflow: "hidden" }}>
              <img src={game.image} alt={game.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "16px" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "8px" }}>{game.title}</h3>
                <p style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "16px" }}>{game.description}</p>
                <a href={game.link} target="_blank" rel="noopener noreferrer">
                  <button style={{ width: "100%", padding: "10px", backgroundColor: "#444", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                    Play Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={{ padding: "0 24px 48px", backgroundColor: "#1a1a1a" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>About Us</h2>
        <p style={{ color: "#ccc", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
          Dormroom Studios began in a college dorm room with one mission: to create meaningful, story-driven mobile games that resonate. We're a small, passionate team of storytellers, artists, and designers who pour our hearts into every game we make. 
          We believe mobile gaming deserves deeper, more emotional experiences—ones where your decisions matter, where narratives linger, and where characters feel real. 
          <br /><br />
          Our stories come from the soul, inspired by everyday struggles, late-night thoughts, and the quiet moments in between. Thank you for being part of our journey.
        </p>
      </section>

      <section id="contact" style={{ padding: "0 24px 48px" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>Contact</h2>
        <p style={{ color: "#ccc", maxWidth: "800px", margin: "0 auto 16px" }}>
          We'd love to hear from you—whether you're a player with feedback, a fellow dev, or someone who just wants to say hi.
        </p>
        <p style={{ color: "#aaa", textAlign: "center" }}>
          📧 Email us: <a href="mailto:hello@dormroomstudios.com" style={{ color: "#66ccff" }}>hello@dormroomstudios.com</a>
        </p>
      </section>

      <footer style={{ textAlign: "center", padding: "24px 0", color: "#666", fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Dormroom Studios. All rights reserved.
      </footer>
    </div>
  );
}
