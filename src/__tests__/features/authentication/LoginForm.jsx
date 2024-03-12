import { screen } from "@testing-library/react";
import LoginForm from "../../../features/authentication/LoginForm";
import { test, describe, expect } from "vitest";
import { renderWithClient } from "../../utils/helpers";

describe("LoginForm component", () => {
  describe("correctly renders", () => {
    test("test button", () => {
      renderWithClient(<LoginForm />);
      const testButton = screen.getByRole("button", {
        name: /test/i,
      });
      expect(testButton).toBeInTheDocument();
    });
    test("login button", () => {
      renderWithClient(<LoginForm />);
      const loginButton = screen.getByRole("button", {
        name: /log in/i,
      });
      expect(loginButton).toBeInTheDocument();
    });
    test("email label", () => {
      renderWithClient(<LoginForm />);
      const emailLabel = screen.getByLabelText(/email/i);
      expect(emailLabel).toBeInTheDocument();
    });
    test("password label", () => {
      renderWithClient(<LoginForm />);
      const passwordLabel = screen.getByLabelText(/password/i);
      expect(passwordLabel).toBeInTheDocument();
    });
    test("email input", () => {
      renderWithClient(<LoginForm />);
      const emailInput = screen.getByPlaceholderText(/you@example/i);
      expect(emailInput).toBeInTheDocument();
    });
    test("password input", () => {
      renderWithClient(<LoginForm />);
      const passwordInput = screen.getByPlaceholderText("*******");
      expect(passwordInput).toBeInTheDocument();
    });
  });
});
