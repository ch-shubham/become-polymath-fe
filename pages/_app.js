import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faSun,
  faMoon,
  faBorderAll,
  faListUl,
  faSortNumericDown,
  faSortNumericUp,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false; // performance boost. It stops importing automatic css files as we are doing it below
library.add(
  faListUl,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp,
  faSun,
  faMoon
);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/darcula.css";
import "styles/index.scss";
import "react-toggle/style.css"; // for ES6 modules

import ThemeProvider from "providers/ThemeProvider";
import { useEffect } from "react";
import { analytics } from "userFirebase/config";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      analytics();
    }
  }, []);
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
