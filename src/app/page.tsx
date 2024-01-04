import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { theme } from "@/components/theme";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <MaxWidthWrapper>
        <>
          <Typography variant="h3">
            Chat with you
            <Typography
              variant="body1"
              sx={{ fontSize: "3rem", color: theme.palette.primary.main }}
            >
              documents
            </Typography>
            in seconds
          </Typography>

          <Link href="/dashboard">Get started!</Link>
        </>
      </MaxWidthWrapper>
    </main>
  );
}
