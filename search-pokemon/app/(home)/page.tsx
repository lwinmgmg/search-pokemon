import HomePage from "@/app/ui/home/HomePage";
import { redirect } from "next/navigation";

export default function Home({
  searchParams: {
    page = "1",
    limit = "12"
  }
}: {
  searchParams: {
    page?: string,
    limit?: string
  }
}) {
  let pageNumber = 1;
  let limitNumber = 12;
  try {
    pageNumber = Number(page);
    limitNumber = Number(limit)
  } catch {
    redirect("/");
  }
  if (pageNumber <= 0 || limitNumber <= 0) {
    redirect("/");
  }
  return (
    <div className="w-full h-full grow">
      <HomePage page={pageNumber} limit={limitNumber} />
    </div>
  );
}
