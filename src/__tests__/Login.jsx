import { screen, render } from "@testing-library/react";
import LoginForm from "../features/authentication/LoginForm";
import { test, describe, expect } from "vitest";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
/* eslint-disable react/display-name */

describe("Login component", () => {
  test("renders correctly", () => {
    const queryClient = new QueryClient();

    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <LoginForm />
        </QueryClientProvider>
      </BrowserRouter>,
    );
    const buttonElement = screen.getByRole("button", {
      name: "TEST",
    });
    expect(buttonElement).toBeInTheDocument();
  });
});
