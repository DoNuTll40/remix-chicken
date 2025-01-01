import stylesheet from "./tailwind.css?url";
import fontAwesomeStyles from "@fortawesome/fontawesome-svg-core/styles.css"; 
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./contexts/ThemeContext";

export const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: fontAwesomeStyles },
  { rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"},
  { rel: "icon", href: "./chicken-logo-center.png" },
];

export default function App() {
  return (
    <ThemeContextProvider>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
    </ThemeContextProvider>
  );
}
