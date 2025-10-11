import React from "react";
import Link from "next/link";
import { ComponentMetaData } from "@/utils/components.meta";

const categoryDisplayName = (key: string) =>
  key.charAt(0).toUpperCase() + key.slice(1);

const CATEGORY_ORDER = ["beginner", "intermediate"];

const LandingPage: React.FC = () => {
  const grouped = ComponentMetaData.reduce<Record<string, typeof ComponentMetaData>>(
    (acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  const sortedCategoryKeys = [
    ...CATEGORY_ORDER.filter((c) => c in grouped),
    ...Object.keys(grouped)
      .filter((k) => !CATEGORY_ORDER.includes(k))
      .sort(),
  ];

  return (
    <div className="p-6 space-y-8">
      {sortedCategoryKeys.map((category) => (
        <section key={category}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {categoryDisplayName(category)} Components
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {grouped[category].map((component) => (
              <Link key={component.slug} href={`/component/${component.slug}`}>
                <div className="block">
                  <div className="p-3 bg-white border rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all transform cursor-pointer h-full">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {component.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      Explore this component in detail.
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default LandingPage;
