import React from "react";

export default function TitleCategory() {
  return (
    <section className="w-full pt-4 pb-0 pl-56 font-sans" aria-labelledby="category-heading">
      <div className="flex items-center space-x-3">
        <img src="/images/kategory.svg" alt="Category icon" width={24} height={24} loading="lazy" />
        <h2 id="category-heading" className="text-gray-500 text-lg font-semibold">
          Category
        </h2>
      </div>
    </section>
  );
}
