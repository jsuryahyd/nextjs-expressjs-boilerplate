import Router from "next/router";
import { useEffect } from "react";
export default function Dashboard() {
  useEffect(() => {
    Router.push("/dashboard/categories");
    return () => {};
  }, []);

  return <></>;
}

// Dashboard.getInitialProps = ctx => {
//   Router.push("/dashboard/categories");//Router  should be used only in client side code
// };
