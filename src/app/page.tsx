// src/app/page.tsx
import { createClient } from "@supabase/supabase-js";
import ToolCard from "./components/ToolCard";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getTools() {
  const { data, error } = await supabase.from("tools").select("*");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export default async function HomePage() {
  const tools = await getTools();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AI Tools Marketplace</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </main>
  );
}