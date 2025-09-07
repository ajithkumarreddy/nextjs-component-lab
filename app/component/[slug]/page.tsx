import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { ComponentMetaData } from "@/utils/components.meta";

const ComponentPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const componentData = ComponentMetaData.find(
    (component) => component.slug === slug
  );

  if (!componentData) {
    return notFound();
  }

  const Component = dynamic(() =>
    import(`@/components/${componentData.slug}`).then((mod) => mod.default)
  );

  console.log(componentData, Component);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">{componentData.title}</h1>
      <Component />
    </main>
  );
};

export default ComponentPage;
