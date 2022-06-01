import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      forcedTheme={Component.theme || null}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
