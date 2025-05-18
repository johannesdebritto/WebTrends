// app/page.tsx

import Opsion from "./components/opsion";
import Deskripsi from "./components/deskripsi";

export default function HomePage() {
  return (
    <main>
      <section aria-label="Pencarian Trend Media Sosial">
        <Opsion />
      </section>

      <section aria-label="Deskripsi WebTrends">
        <Deskripsi />
      </section>
    </main>
  );
}
