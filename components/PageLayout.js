import { Container } from "react-bootstrap";
import Footer from "./Footer";
import BlogNavbar from "./Navbar";
import Head from "next/head";
import { useTheme } from "providers/ThemeProvider";
export default function PageLayout({ children, className }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme.type}>
      <Head>
        <title>Become Polymath</title>
      </Head>

      <Container>
        <BlogNavbar theme={theme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <Footer />
      </Container>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </div>
  );
}
