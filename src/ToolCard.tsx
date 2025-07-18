// src/app/components/ToolCard.tsx
type Tool = {
  id: string;
  name: string;
  slug: string;
  description: string;
  pricing_type: string;
  logo_url: string;
  website_url: string;
};

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.website_url}
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-xl p-4 shadow hover:shadow-lg transition block"
    >
      <img
        src={tool.logo_url}
        alt={tool.name}
        className="h-12 w-12 object-contain mb-2"
      />
      <h2 className="text-lg font-bold">{tool.name}</h2>
      <p className="text-sm text-gray-600">{tool.description}</p>
      <p className="text-xs mt-2 text-gray-400">{tool.pricing_type}</p>
    </a>
  );
}