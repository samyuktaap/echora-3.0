import { motion } from "framer-motion";

export default function Hero() {
return (
<div style={{
height: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background: "linear-gradient(135deg, #0f0f1a, #1a1a2e)",
color: "white",
textAlign: "center"
}}>

  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 style={{
      fontSize: "3rem",
      background: "linear-gradient(90deg, #00f5ff, #ff00ff)",
      WebkitBackgroundClip: "text",
      color: "transparent"
    }}>
      VolunteerHub ✨
    </h1>

    <p>Make impact. Help people.</p>

    <button style={{
      marginTop: "20px",
      padding: "12px 25px",
      borderRadius: "30px",
      border: "none",
      background: "linear-gradient(90deg, #00f5ff, #ff00ff)",
      color: "white",
      cursor: "pointer"
    }}
    onClick={() => alert('Get Started clicked!')}>
      Get Started
    </button>

  </motion.div>

</div>
);

}