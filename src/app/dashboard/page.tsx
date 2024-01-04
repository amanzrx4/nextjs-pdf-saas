import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/db";
import Dashboard from "@/components/Dashboard";

async function page() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
  });

  if (!user || !dbUser) {
    redirect("/auth-callback?origin=dashboard");
  }

  return <Dashboard />;
}

export default page;
