import { cn } from "@/lib/utils";
import Client from "./client";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary, useQuery } from "@tanstack/react-query";

const Page = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className={cn("text-red-500 font-semibold")}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Client />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
