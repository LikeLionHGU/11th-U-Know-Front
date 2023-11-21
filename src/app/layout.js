import { Inter } from "next/font/google";
import "./globals.css";
import { Box, CssBaseline } from "@mui/material";
import theme from "./theme";
import ThemeProvider from "@/theme";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <CssBaseline />
        <body className={inter.className}>
          <Header />
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {children}
          </Box>
        </body>
      </ThemeProvider>
    </html>
  );
}
