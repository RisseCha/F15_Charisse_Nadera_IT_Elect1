import React from "react";

const UserProfile = () => {
  const user = {
    name: "Chris Dela Cruz",
    email: "chris@example.com",
    joined: "January 2025",
    flashcardsCreated: 28,
    flashcardsReviewed: 124,
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://via.placeholder.com/120"
          alt="Profile"
          style={styles.avatar}
        />
        <h2 style={styles.name}>{user.name}</h2>
        <p style={styles.email}>{user.email}</p>

        <div style={styles.stats}>
          <div style={styles.statBox}>
            <h3 style={styles.statNumber}>{user.flashcardsCreated}</h3>
            <p style={styles.statLabel}>Created</p>
          </div>
          <div style={styles.statBox}>
            <h3 style={styles.statNumber}>{user.flashcardsReviewed}</h3>
            <p style={styles.statLabel}>Reviewed</p>
          </div>
        </div>

        <div style={styles.info}>
          <p><strong>Joined:</strong> {user.joined}</p>
        </div>

        <button style={styles.button}>Edit Profile</button>
      </div>
    </div>
  );
};

// Inline styles (for simplicity in Acode)
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    width: "320px",
    padding: "30px",
    textAlign: "center",
  },
  avatar: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
  name: {
    fontSize: "22px",
    margin: "10px 0 5px",
  },
  email: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  stats: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  statBox: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2575fc",
  },
  statLabel: {
    fontSize: "13px",
    color: "#777",
  },
  info: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#2575fc",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default UserProfile;
