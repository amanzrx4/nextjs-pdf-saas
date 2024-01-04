import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function page() {
  const {
    getAccessToken,
    getBooleanFlag,
    getFlag,
    getIdToken,
    getIntegerFlag,
    getOrganization,
    getPermission,
    getPermissions,
    getStringFlag,
    getUser,
    getUserOrganizations,
    isAuthenticated,
  } = getKindeServerSession();

  const user = await getUser();

  console.log("user", JSON.stringify(user, null, 10));

  //   console.log(await getAccessToken());
  //   console.log(await getBooleanFlag("bflag", false));
  //   console.log(await getFlag("flag", "x", "s"));
  //   console.log(await getIntegerFlag("iflag", 99));
  //   console.log(await getOrganization());
  //   console.log(await getPermission("eat:chips"));
  //   console.log(await getPermissions());
  //   console.log(await getStringFlag("sflag", "test"));
  //   console.log(await getUser());
  //   console.log(await getUserOrganizations());
  //   console.log(await isAuthenticated());

  return <div>user: {JSON.stringify(user, null, 10)}</div>;
}

export default page;
