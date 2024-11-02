

export default function Footer() {
    return (
      <footer style={footerStyle}>
        <p style={footerTextStyle}>© New Generation High School - All Rights Reserved</p>
        <p style={footerTextStyle}>Contact us: info@newgenerationhighschool.com</p>
      </footer>
    );
  }
  
  // Styles
  const footerStyle = {
    padding: "1.5rem 0",
    backgroundColor: "#000080", 
    color: "#fff", 
    textAlign: "center",
    marginTop: "2rem", 
    borderTop: "1px solid #444", 
  };
  
  const footerTextStyle = {
    margin: "0.5rem 0", 
    fontSize: "0.9rem", 
    color: "#ddd", 
  };
  