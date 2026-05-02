export default function injectFonts() {
  if (document.getElementById("qbit-fonts")) return;

  const link = document.createElement("link");
  link.id = "qbit-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap";

  document.head.appendChild(link);
}