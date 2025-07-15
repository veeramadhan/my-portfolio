const items = [
  "REACT.JS", "TAILWIND CSS", "NEXT.JS", "JAVASCRIPT",
  "UI/UX DESIGN", "RESPONSIVE DESIGN", "BootStrap",
  "MOTION", "MaterialUI", "FIREBASE", "GITHUB", "HTML", "CSS"
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-gray-500 py-4 ">
      <div className="flex w-[200%] animate-marquee">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center px-6 py-4 whitespace-nowrap"
          >
            <span className="text-white font-bold text-xl tracking-wider">
              {item}
            </span>
            <span className="text-white text-2xl px-3">✶</span>
          </div>
        ))}
      </div>
    </div>
  );
}
