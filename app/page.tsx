import Link from "next/link";
import { ComponentMetaData } from "@/utils/components.meta";

const LandingPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Machine Coding Problems</h1>
      <ul className="space-y-3">
        {ComponentMetaData.map((component) => (
          <li
            key={component.slug}
            className="p-3 border rounded-lg shadow hover:bg-gray-100"
          >
            <Link href={`/component/${component.slug}`}>{component.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
