"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { trpc } from "../_trpc/client";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";

function Page() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const origin = searchParams.get("origin");

  trpc.authCallback.useQuery(undefined, {
    onSuccess: (data) => {
      const pathToPush = origin ? `/${origin}` : "/dashboard";
      router.push(pathToPush);
    },
    onError: (err) => {
      console.log("error here", err);
      if (err.data?.code === "UNAUTHORIZED") {
        router.push("/sign-in");
      }
    },
  });

  return (
    <>
      <LinearProgress sx={{ w: 1 }} />
      <Typography>Setting up please wait ...</Typography>
    </>
  );
}

export default Page;
