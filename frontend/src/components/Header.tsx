import { Component } from 'solid-js';

const Header: Component = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        "background-color": "#f50057", // Correct dash-separated syntax
        padding: "10px 20px",
        "z-index": "10",
        display: "flex",
        "align-items": "center",
        "justify-content": "space-between", // Space between logo and navigation
      }}
    >
      {/* Logo Section */}
      <a
        href="/"
        style={{
          display: "flex",
          "align-items": "center",
          gap: "10px",
          color: "#ffffff",
          "text-decoration": "none", // Correct dash-separated syntax
          cursor: "pointer",
        }}
      >
        {/* Logo Icon */}
        <div
          style={{
            width: "30px",
            height: "30px",
            "background-color": "#ffffff", // Correct dash-separated syntax
            "border-radius": "50%",
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
            "box-shadow": "0 4px 6px rgba(0, 0, 0, 0.2)", // Correct dash-separated syntax
          }}
        >
          <span style={{ color: "#f50057", "font-size": "10px", "font-weight": "bold" }}>OSC</span>
        </div>

        {/* Logo Text */}
        <h1
          style={{
            margin: "0",
            color: "#ffffff",
            "font-size": "15px", // Correct dash-separated syntax
            "font-weight": "bold", // Correct dash-separated syntax
            "font-family": "'Poppins', sans-serif", // Correct dash-separated syntax
          }}
        >
          OnlineShaadiCards
        </h1>
      </a>

      {/* Navigation Links */}
      <nav
        style={{
          display: 'flex',
          gap: '20px',
          color: '#ffffff',
          "flex-grow": 1, // Makes navigation take up available space
          "margin-left": '40px', // Moves navigation slightly to the left
        }}
      >
        <a href="/" style={{ color: '#ffffff', "text-decoration": 'none', cursor: 'pointer' }}>Home</a>
        <a href="/view" style={{ color: '#ffffff', "text-decoration": 'none', cursor: 'pointer' }}>View</a>
        <a href="/contact" style={{ color: '#ffffff', "text-decoration": 'none', cursor: 'pointer' }}>Contact</a>
      </nav>

      {/* Right Corner Icons */}
      <div
        style={{
          display: 'flex',
          gap: '15px',
          "margin-right": '40px', // Adjusted margin-right for responsiveness
        }}
      >
        {/* Cart Icon */}
        <div
          style={{
            width: '30px',
            height: '30px',
            "background-color": '#ffffff', // Correct dash-separated syntax
            "border-radius": '50%', // Correct dash-separated syntax
            display: 'flex',
            "justify-content": 'center',
            "align-items": 'center',
            cursor: 'pointer',
            "box-shadow": '0 4px 6px rgba(0, 0, 0, 0.2)', // Correct dash-separated syntax
          }}
          title="Cart"
        >
          <span style={{ color: '#f50057', "font-size": '16px' }}>🛒</span> {/* Cart Emoji */}
        </div>

        {/* Login Icon */}
        <div
          style={{
            width: '30px',
            height: '30px',
            "background-color": '#ffffff', // Correct dash-separated syntax for inline styles
            "border-radius": '50%', // Correct dash-separated syntax for inline styles
            display: 'flex',
            "justify-content": 'center',
            "align-items": 'center',
            cursor: 'pointer',
            "box-shadow": '0 4px 6px rgba(0, 0, 0, 0.2)', // Correct dash-separated syntax for inline styles
          }}
          title="Login"
        >
          <span style={{ color: '#f50057', "font-size": '16px' }}>🔑</span> {/* Key Emoji */}
        </div>
      </div>
    </header>
  );
};

export default Header;
