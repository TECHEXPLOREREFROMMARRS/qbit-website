import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    phone: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwnbwiJNwsqje6UMalsX9lJV0QzKawFtBKuH9Pv-xe1ucAFmVdwQsbw1M1ksyWKhPGN/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name: form.name,
            org: form.org,
            email: form.email,
            phone: form.phone,
            message: form.message
          }),
        }
      );

      setSubmitted(true);
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      {!submitted ? (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <h2>Contact Us</h2>

          <input
            placeholder="Name *"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            style={input}
          />

          <input
            placeholder="Organization"
            value={form.org}
            onChange={(e) => set("org", e.target.value)}
            style={input}
          />

          <input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            style={input}
          />

          <input
            placeholder="Email *"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            style={input}
          />

          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            style={{ ...input, height: "100px" }}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              background: loading ? "#444" : "#00C8FF",
              color: "#000",
              border: "none",
              borderRadius: "6px",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? "Sending..." : "Submit Request →"}
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>✅ Request Sent</h2>
          <p>We’ll get back to you soon.</p>

          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                name: "",
                org: "",
                email: "",
                phone: "",
                message: ""
              });
            }}
            style={{
              marginTop: "1rem",
              padding: "10px 20px",
              background: "transparent",
              border: "1px solid #00C8FF",
              color: "#00C8FF",
              cursor: "pointer"
            }}
          >
            Send Another
          </button>
        </div>
      )}
    </div>
  );
}

const input = {
  width: "100%",
  padding: "10px",
  marginTop: "8px",
  background: "#050810",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
  borderRadius: "6px"
};