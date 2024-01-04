import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
// eslint-disable-next-line
import theme from "@mui/material/styles/defaultTheme";

export default function Home() {
  console.log("theme", theme);
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
            <Typography variant="body1" sx={{ fontSize: "3rem", color: "red" }}>
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
