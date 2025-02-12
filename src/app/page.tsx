"use client";
import Navbar from "@/components/navbar/Navbar";
import "@/src/app/globals.css";
import { theme } from "@/src/app/theme";
import background from "@/src/assets/bg.jpg";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";
import HomePage from "../../components/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Image
            alt="background"
            src={background}
            className={styles.backgroundImage}
            width={1920}
            height={1080}
          />
          <HomePage />
        </ThemeProvider>
      </main>
    </div>
  );
}
