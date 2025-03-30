import { Component } from 'solid-js';

const Footer: Component = () => {
  return (
    <div style={{
      display: 'flex',
      "align-items": 'center',
      gap: '8px',
      "font-family": "'Poppins', sans-serif",
    }}>
      {/* Icon */}
      <div style={{
        width: '40px',
        height: '40px',
        "background-color": '#f50057',
        "border-radius": '50%',
        display: 'flex',
        "justify-content": 'center',
        "align-items": 'center',
        "box-shadow": '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}>
        <span style={{ color: '#fff', "font-size": '18px', "font-weight": 'bold' }}>SC</span>
      </div>
      
      {/* Text */}
      <div>
        <h1 style={{
          margin: '0',
          "font-size": '24px',
          color: '#f50057',
          "font-weight": 'bold',
        }}>
          OnlineShaadiCards
        </h1>
      </div>
    </div>
  );
};

export default Footer;


// import { Component } from 'solid-js';

// const Header: Component = () => {
//   return (
//     <header
//       style={{
//         position: "fixed",
//         top: "0",
//         left: "0",
//         width: "100%",
//         "background-color": "#f50057",
//         padding: "1px 1px",
//         "z-index": "10",
//       }}
//     >
//       <div style={{
//       display: 'flex',
//       "align-items": 'center',
//       gap: '8px',
//       "font-family": "'Poppins', sans-serif",
//     }}>
//       {/* Text */}
//       <div>
//         <h1 style={{
//           margin: '0',
//           "font-size": '20px',
//           color: '#ffffff',
//           "font-weight": 'bold',
//         }}>
//           OnlineShaadiCards
//         </h1>
//       </div>
//     </div>
//     </header>
//   );
// };

// export default Header;
