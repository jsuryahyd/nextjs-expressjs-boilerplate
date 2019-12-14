import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Label,
  Col,
  Input
} from "reactstrap";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import AuthPageLayout from "../components/authLayout";
import { tryLogin } from "../services/authServices";
import { until } from "../utils";



export default function() {
  
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const router = useRouter();
  const validateAndTryLogin = useCallback(async (email, pwd) => {

    //todo : validation
    const [err, success] = await until(tryLogin(email, pwd));
    if (err) return console.error(err);
    console.log(success);
    router.push("/dashboard/categories");
    //navigate
  }, []);

  return (
    <AuthPageLayout>
      <main
        style={{ height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Card style={{ width: "90%", minWidth: 300, maxWidth: 500 }}>
          <CardBody className="p-2 p-md-4">
            <h1 className="text-center mb-4">Login Form</h1>
            <FormGroup row>
              <Label for="loginEmail" sm={4}>
                Email
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  name="email"
                  id="loginEmail"
                  placeholder="Enter your email"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="password_entry" sm={4}>
                Password
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="password_entry"
                  placeholder="Your Password"
                />
              </Col>
            </FormGroup>
            <Button
              color="secondary"
              className="float-right"
              outline
              onClick={() => validateAndTryLogin(email, pwd)}
            >
              Login
            </Button>
          </CardBody>
        </Card>
      </main>
    </AuthPageLayout>
  );
}
