import type { AppProps } from "next/app";
import Layout from "../components/main/layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
