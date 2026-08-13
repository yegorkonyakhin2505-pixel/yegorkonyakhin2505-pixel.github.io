const ITEMS = [
  "Videography",
  "Scriptwriting",
  "Editing",
  "Social Media Management",
  "Posting & Scheduling",
  "Monthly Analytics",
  "Website & Platform Development",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line py-5">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {ITEMS.map((item) => (
              <span
                key={item}
                className="display flex items-center gap-8 px-8 text-2xl md:text-4xl"
              >
                {item}
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
