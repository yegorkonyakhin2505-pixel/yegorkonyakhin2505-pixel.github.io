import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";

export default function Cta({ text = "Tell us about your business and we'll reply with the package that fits and a date for a first shoot." }: { text?: string }) {
  return (
    <div className="box" style={{ marginTop: "3rem" }}>
      <p>{text}</p>
      <p style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.25rem", marginBottom: 0 }}>
        <Link href="/contact" className="cta">Start a project</Link>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="cta ghost">WhatsApp us</a>
      </p>
    </div>
  );
}
