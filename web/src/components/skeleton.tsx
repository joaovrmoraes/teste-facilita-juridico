import { ComponentProps } from "react";

export function SkeletonComponent({}: ComponentProps<"div">) {
  return (
    <div className={`h-14 w-full animate-pulse rounded-md bg-zinc-200/50 mt-1 px-4`} />
  );
}
