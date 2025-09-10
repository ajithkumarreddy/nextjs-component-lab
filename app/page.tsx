import Link from "next/link";
import { ComponentMetaData } from "@/utils/components.meta";

const LandingPage = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ComponentMetaData.map((component) => (
          <Link key={component.slug} href={`/component/${component.slug}`}>
            <div className="p-3 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {component.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2">
                {"Explore this component in detail."}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
