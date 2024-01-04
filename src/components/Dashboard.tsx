"use client";
import Typography from "@mui/material/Typography";
import React from "react";
import UploadButton from "./UploadButton";
import { trpc } from "@/app/_trpc/client";

function Dashboard() {
  const { data } = trpc.getUserFiles.useQuery();

  return (
    <div>
      <Typography pb={2} variant="h2" fontWeight="bold">
        My files {JSON.stringify(data)}
      </Typography>
      <UploadButton />
    </div>
  );
}

export default Dashboard;
