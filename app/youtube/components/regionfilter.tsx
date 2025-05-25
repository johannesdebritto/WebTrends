import React from "react";

const regions = [
  {
    id: "ID",
    name: "Indonesia",
    flag: "/images/indo.svg",
  },
  {
    id: "GB",
    name: "United Kingdom",
    flag: "/images/uk.svg",
  },
  {
    id: "US",
    name: "United States",
    flag: "/images/usa.svg",
  },
];

type RegionButtonsProps = {
  onSelectRegion: (regionId: string) => void;
};

export default function RegionButtons({ onSelectRegion }: RegionButtonsProps) {
  return (
    <section className="w-full px-4 py-4 font-sans" aria-label="Region selection">
      <div className="flex gap-6 justify-center">
        {regions.map(({ id, name, flag }) => (
          <button
            key={id}
            type="button"
            onClick={() => onSelectRegion(id)}
            className="flex items-center justify-center gap-3 px-8 py-3 bg-white border-2 border-black rounded-full shadow-sm
              text-gray-800 font-semibold text-sm
              hover:bg-gray-100 hover:animate-wiggle
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1
              transition whitespace-nowrap"
            style={{ minWidth: 200 }}
            aria-label={`Select region: ${name}`}
          >
            <img src={flag} alt={`Flag of ${name}`} className="w-8 h-8 rounded-full border border-gray-300 object-contain" loading="lazy" />

            <span>{name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
