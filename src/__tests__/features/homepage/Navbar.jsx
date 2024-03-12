import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Navbar from "../../../features/homepage/Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  describe("correctly renders", () => {
    test("sign up button", () => {
      render(<Navbar />, {
        wrapper: BrowserRouter,
      });
      const signUpButton = screen.getByRole("button", {
        name: /sign up/i,
      });
      expect(signUpButton).toBeInTheDocument();
    });

    test("log in button", () => {
      render(<Navbar />, {
        wrapper: BrowserRouter,
      });
      const logInButton = screen.getByRole("button", {
        name: /log in/i,
      });
      expect(logInButton).toBeInTheDocument();
    });

    test("logo image", () => {
      render(<Navbar />, {
        wrapper: BrowserRouter,
      });
      const logoImage = screen.getByAltText(/logo/i);
      expect(logoImage).toBeInTheDocument();
    });
    test("navigation list", () => {
      render(<Navbar />, {
        wrapper: BrowserRouter,
      });
      const navigationList = screen.getByRole("list");
      expect(navigationList).toBeInTheDocument();
    });
  });
});
