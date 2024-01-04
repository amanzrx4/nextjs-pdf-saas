import prisma from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

type Props = {
  params: {
    fileId: string;
  };
};

async function Page({ params }: Props) {
  const fileId = params.fileId;
  const user = await getKindeServerSession().getUser();

  const fileFromDb = await prisma.file.findUnique({
    where: {
      id: fileId,
      userId: user?.id,
    },
  });

  //   if (!fileFromDb) {
  //     return notFound();
  //   }

  return (
    <Grid container sx={{ width: "100%" }} spacing={0}>
      <Grid xs={12} md={7}>
        <Box sx={{ border: 1 }}>xs=8</Box>
      </Grid>
      <Grid xs={12} md={5}>
        <Box sx={{ border: 1 }}>xs=8</Box>
      </Grid>
    </Grid>
  );
}

export default Page;
