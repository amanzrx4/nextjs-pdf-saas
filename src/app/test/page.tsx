"use client";

import React from "react";
import { trpc } from "../_trpc/client";

function Page() {
  const { data } = trpc.test.useQuery();
  return <div>test route : {data?.message}</div>;
}

export default Page;
