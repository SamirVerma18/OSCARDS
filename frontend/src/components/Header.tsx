import { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        "background-color": "#f50057",
        padding: "10px 20px",
        "z-index": "10",
        display: "flex",
        "align-items": "center",
      }}
    >
      <a
        href="/"
        style={{
          display: "flex",
          "align-items": "center",
          gap: "10px",
          color: "#ffffff",
          "text-decoration": "none",
          cursor: "pointer",
          margin: "0 20px",
        }}
      >
        {/* Logo Icon */}
        <div
          style={{
            width: "30px",
            height: "30px",
            "background-color": "#ffffff",
            "border-radius": "50%",
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            "box-shadow": "0 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span style={{ color: "#f50057", "font-size": "10px", "font-weight": "bold" }}>OSC</span>
        </div>

        {/* Logo Text */}
        <h1
          style={{
            margin: "0",
            color: "#ffffff",
            "font-size": "15px",
            "font-weight": "bold",
            "font-family": "'Poppins', sans-serif",
          }}
        >
          OnlineShaadiCards
        </h1>
      </a>
    </header>
  );
};

export default Header;
