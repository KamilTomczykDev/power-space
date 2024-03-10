import { screen } from "@testing-library/react";
import SignUpForm from "../../features/authentication/SignUpForm";
import { test, describe, expect } from "vitest";
import { renderWithClient } from "../utils/helpers";

describe("SignUpForm component", () => {
  describe("correctly renders", () => {
    //buttons
    test("SignUp button", () => {
      renderWithClient(<SignUpForm />);
      const signUpButton = screen.getByRole("button", {
        name: /sign up/i,
      });
      expect(signUpButton).toBeInTheDocument();
    });
    //labels
    test("username label", () => {
      renderWithClient(<SignUpForm />);
      const usernameLabel = screen.getByLabelText(/username/i);
      expect(usernameLabel).toBeInTheDocument();
    });
    test("email label", () => {
      renderWithClient(<SignUpForm />);
      const emailLabel = screen.getByLabelText(/email/i);
      expect(emailLabel).toBeInTheDocument();
    });
    test("password label", () => {
      renderWithClient(<SignUpForm />);
      const passwordLabel = screen.getByLabelText(/Password/);
      expect(passwordLabel).toBeInTheDocument();
    });
    test("confirm password label", () => {
      renderWithClient(<SignUpForm />);
      const confirmPasswordLabel = screen.getByLabelText(/confirm password/i);
      expect(confirmPasswordLabel).toBeInTheDocument();
    });
    //inputs
    test("username input", () => {
      renderWithClient(<SignUpForm />);
      const usernameInput = screen.getByPlaceholderText(/toplifter123/i);
      expect(usernameInput).toBeInTheDocument();
    });
    test("email input", () => {
      renderWithClient(<SignUpForm />);
      const emailInput = screen.getByPlaceholderText(/you@example/i);
      expect(emailInput).toBeInTheDocument();
    });
    test("password and confirm password inputs", () => {
      renderWithClient(<SignUpForm />);
      const passwordInputs = screen.getAllByPlaceholderText("*******");
      passwordInputs.forEach((input) => expect(input).toBeInTheDocument());
    });
  });
});
