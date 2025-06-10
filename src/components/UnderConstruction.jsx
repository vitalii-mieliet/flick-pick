const UnderConstruction = () => {
  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#121212",
      color: "#f1f1f1",
      fontFamily: "Segoe UI, Roboto, sans-serif",
      textAlign: "center",
      padding: "1rem",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "1rem",
    },
    subtitle: {
      fontSize: "1.2rem",
      opacity: 0.8,
    },
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Website Under Construction</h1>
      <p style={styles.subtitle}>Something awesome is coming soon :)</p>
    </div>
  );
};

export default UnderConstruction;
