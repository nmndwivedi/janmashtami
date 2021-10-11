import { ContributeCard, Nav, Feed } from "../Components";
import { useSelector } from "react-redux";

export default function Contribute() {
  const products = useSelector((state) => state.catalog.items);
  const contributors = useSelector((state) => state.feed.donors);

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-4 md:mb-10 text-indigo-700">
              Contribute to Preparations
            </h1>
          </div>
        </header>
        <main className="flex">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-48 flex flex-col items-center xl:items-start space-y-12">
            {products.map((p) => (
              <ContributeCard key={p.id} product={p} />
            ))}
          </div>

          <div className="hidden sticky top-8 xl:block mt-4 mr-16 -ml-12 w-72 h-96">
            <p className="mb-4">Recent Activity</p>

            <div className="h-96 overflow-y-scroll border border-gray-300 px-4 rounded-2xl">
              <Feed contributors={contributors} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
