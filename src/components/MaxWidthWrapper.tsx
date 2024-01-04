import { Box } from "@mui/material";
import React, { ReactNode } from "react";

function MaxWidthWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        width: ["90%", "60%"],
        mx: "auto",
      }}
    >
      {children}
    </Box>
  );
}

export default MaxWidthWrapper;
