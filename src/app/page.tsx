import { cn } from "@/lib/utils";

const Page = () => {
  const a = true;
  return (
    <div
      className={cn(
        "text-red-500 font-semibold",
        a ? "bg-blue-500" : "bg-gray-500",
      )}
    >
      Hello World
    </div>
  );
};

export default Page;
