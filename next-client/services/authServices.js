import fetch from "isomorphic-unfetch";
import getConfig from "next/config";
import { until } from "../utils";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
console.log(getConfig());
export async function tryLogin(email, pwd) {
  const { baseUrl, apiPrefix } = publicRuntimeConfig;
  const [loginErr, loginRes] = await until(
    fetch(baseUrl + apiPrefix + "/login/admin", {
      method: "Post",
      body: JSON.stringify({
        email,
        password: pwd
      })
    }).then(res => res.json())
  );

  if (loginErr) {
    throw loginErr;
  }
  if (!loginRes.success) {
    throw new Error(loginRes.msg);
  }
  return loginRes;
}
