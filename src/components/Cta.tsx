import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/site";

export default function Cta({ text = "Answer five quick questions and we reply within 1 working day with the package and the price that fit your business." }: { text?: string }) {
  return (
    <div className="box" style={{ marginTop: "3rem" }}>
      <p>{text}</p>
      <p style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.25rem", marginBottom: 0 }}>
        <Link href="/pricing#quiz" className="cta">Find your price</Link>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="cta ghost">WhatsApp us</a>
      </p>
    </div>
  );
}
