import React, { useRef } from "react";
import { Form, Card, Button } from "react-bootstrap";

export function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <>
      <Card style={{ maxWidth: "600px" }}>
        <Card.Body>
          <h2 className="text-center mb-4"> Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                // ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                // ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="email"
                // ref={passworConfirmdRef}
                required
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">Already have an account? Login</div>
      </Card>
    </>
  );
}
