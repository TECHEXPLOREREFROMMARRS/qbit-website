import { C, FD, FB, accent } from "../styles/theme";

export default function PageHeader({ tag, h1, accentText, sub }) {
  return (
    <div style={{
      padding: "5rem 2rem",
      background: C.bgPanel,
      borderBottom: `1px solid ${C.border}`
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ color: C.cyan, fontSize: "12px", letterSpacing: "2px" }}>
          {tag}
        </div>

        <h1 style={{
          fontFamily: FD,
          fontSize: "3rem",
          margin: "1rem 0"
        }}>
          {h1} <span style={accent}>{accentText}</span>
        </h1>

        <p style={{ color: C.textMid, maxWidth: 500 }}>
          {sub}
        </p>
      </div>
    </div>
  );
}