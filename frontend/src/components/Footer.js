export const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>copyright by <span className="has-text-info">Wejden Bjeoui</span></p>
    )
  }
  
  const FooterStyle = {
    background: "#fff",
    fontSize: ".9rem",
    color:"#222" ,
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".9"
  }