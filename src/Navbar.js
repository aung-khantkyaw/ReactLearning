export default function Navbar(props) {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      background: "dodgerblue",
      color: "white",
      padding: "10px",
    },
  };
  return <div style={styles.navbar}>{props.children}</div>;
}
