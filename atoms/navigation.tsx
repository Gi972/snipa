import Head from "next/head";
import Link from "next/link";

export const Navigation = ({ children }) => (
  <>
    <Head>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Head>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/create">
      <a>Creer un ticket</a>
    </Link>
    <Link href="/catalog">
      <a>Calendrier</a>
    </Link>
    {children}
  </>
);
