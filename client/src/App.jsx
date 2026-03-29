import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import theme from "./theme";
import HomePage from "./pages/HomePage";
import HireMePage from "./pages/HireMePage";
import { LanguageProvider } from "./context/LanguageContext";

if (import.meta.env.PROD) {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
  }
}

const normalizePath = (pathname) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

const resolveRoute = (pathname) => {
  const normalizedPath = normalizePath(pathname);
  return normalizedPath === "/hire-me" ? "/hire-me" : "/";
};

function App() {
  const [route, setRoute] = useState(() => resolveRoute(window.location.pathname));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get("redirect");

    if (redirectPath && redirectPath.startsWith("/")) {
      window.history.replaceState({}, "", redirectPath);
      setRoute(resolveRoute(redirectPath));
    }

    const handlePopState = () => {
      setRoute(resolveRoute(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const PageComponent = useMemo(
    () => (route === "/hire-me" ? HireMePage : HomePage),
    [route],
  );

  return (
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <PageComponent />
      </LanguageProvider>
    </ChakraProvider>
  );
}

export default App;
