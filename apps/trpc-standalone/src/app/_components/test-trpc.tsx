"use client";

import { api } from "~/trpc/react";

export function TestTRPC() {
  const { data, isLoading, isError } = api.test.run.useQuery();

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (!data && isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{data?.success}</div>;
}
