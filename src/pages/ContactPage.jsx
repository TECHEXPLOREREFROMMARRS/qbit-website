import { useState } from "react";
import { C, FD, FB } from "../styles/theme";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  return (
    <div style={{ paddingTop: "80px" }}>

      {/* HEADER */}
      <section style={{
        padding: "clamp(3rem, 6vw, 5rem) 1rem",
        background: C.bgPanel
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h1 style={{
            fontFamily: FD,
            fontSize: "clamp(1.8rem, 5vw, 3rem)"
          }}>
            Contact <span style={{ color: C.cyan }}>Engineering Team</span>
          </h1>

          <p style={{
            fontFamily: FB,
            color: C.textMid,
            maxWidth: 500
          }}>
            Tell us your requirements — our engineers will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: "clamp(2rem, 5vw, 4rem) 1rem" }}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }}>

          {/* LEFT */}
          <div>
            <h2 style={{ fontFamily: FD }}>Reach Us</h2>

            <p style={{ fontFamily: FB }}>📍 Noida, India</p>
            <p style={{ fontFamily: FB }}>✉ defence@qbitlabs.in</p>
            <p style={{ fontFamily: FB }}>🕒 Mon–Fri, 9AM–6PM</p>
          </div>

          {/* FORM */}
          {!submitted ? (
            <div style={{
              background: C.bgCard,
              padding: "1.5rem",
              border: `1px solid ${C.border}`,
              borderRadius: "10px"
            }}>
              <h3 style={{ fontFamily: FD }}>Send Request</h3>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.8rem"
              }}>

                <input
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  style={inputStyle}
                />

                <input
                  placeholder="Organization"
                  value={form.org}
                  onChange={(e) => set("org", e.target.value)}
                  style={inputStyle}
                />

                <input
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  style={inputStyle}
                />

                <textarea
                  placeholder="Your Requirement"
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                  style={{
                    ...inputStyle,
                    height: 100
                  }}
                />

                <button
                  onClick={() => form.name && form.email && setSubmitted(true)}
                  style={{
                    background: C.cyan,
                    border: "none",
                    padding: "12px",
                    fontWeight: "bold",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}
                >
                  Submit Request →
                </button>

              </div>
            </div>
          ) : (
            <div style={{
              background: C.bgCard,
              padding: "2rem",
              border: `1px solid ${C.border}`,
              borderRadius: "10px",
              textAlign: "center"
            }}>
              <h3 style={{ color: C.cyan }}>✓ Request Sent</h3>
              <p style={{ fontFamily: FB }}>
                Our team will contact you within 24 hours.
              </p>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(0,200,255,0.2)",
  padding: "10px",
  color: "#fff",
  borderRadius: "6px",
  outline: "none"
};