import Head from "next/head";
import { Container } from "reactstrap";

export default function AuthPageLayout({ children }) {
  return (
    <>
      <Head>
        <title>Login | nextjs-boilerplate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" crossOrigin="anonymous" />
      </Head>
      {children}
      <style jsx global>{`
        html,
        body {
          background-color: #ccc !important;
        }
      `}</style>
    </>
  );
}
