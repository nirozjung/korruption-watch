import TopLeaders from "../components/TopLeaders";
import QuickStats from "../components/QuickStats";
import D3Chart from "../components/D3Chart";
import RecentScandals from "../components/RecentScandals";

export default function Home({ initialData }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-red-50 flex flex-col">
      {/* ===== HEADER ===== */}
      <header className="bg-gradient-to-r from-red-700 via-rose-600 to-pink-500 text-white shadow-lg">
        <div className="container mx-auto px-6 py-8 flex items-center gap-4">
          <img
            src="/flagnp.jpg"
            alt="Nepal flag"
            width={50}
            height={50}
            className="w-10 h-10 rounded-sm shadow-md object-cover ring-2 ring-white"
          />
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Corruption Watch Nepal
            </h1>
            <p className="mt-1 text-white/90 text-sm max-w-2xl">
              Unmasking corruption — curated, sourced, and visualized.
            </p>
          </div>
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-grow container mx-auto px-6 -mt-8 pb-16">
        {/* Quick Stats Section */}
        <section className="relative z-10 bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
          <QuickStats />
        </section>

        {/* Top Leaders Section */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-gray-800">
              Top Corrupt Leaders
            </h2>
            <span className="text-sm text-gray-500 italic">
              Ranked by reported corruption score
            </span>
          </div>
          <TopLeaders />
        </section>

        {/* Charts and Scandals */}
        <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg border-b pb-2 border-gray-200">
              Corruption by Party
            </h3>
            <D3Chart />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-semibold text-gray-800 mb-4 text-lg border-b pb-2 border-gray-200">
              Recent Scandals
            </h3>
            <RecentScandals />
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <div className="flex justify-center items-center gap-2">
          <p className="text-sm">
            © {new Date().getFullYear()} Corruption Watch Nepal · Data from
            public sources
          </p>
        </div>
      </footer>
    </div>
  );
}
