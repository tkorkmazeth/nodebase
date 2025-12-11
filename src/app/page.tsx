import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

const Page = async () => {
  await requireAuth();

  const data = await caller.getUsers();

  console.log(data);

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      Protected route
      {JSON.stringify(data)}
    </div>
  );
};

export default Page;
