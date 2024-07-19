import { HydrateClient } from "~/trpc/server";

export default function HomePage() {
  return (
    <HydrateClient>
      <main className="container h-screen py-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">It is just TRPC baby</h1>
        </div>
      </main>
    </HydrateClient>
  );
}
