import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Header from "../../../features/homepage/Header";
import { BrowserRouter } from "react-router-dom";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

describe("Header", () => {
  describe("correctly renders", () => {
    mockAllIsIntersecting(true);

    test("main heading", () => {
      render(<Header />, {
        wrapper: BrowserRouter,
      });
      const mainHeading = screen.getByRole("heading", {
        level: 1,
      });
      expect(mainHeading).toBeInTheDocument();
    });

    test("secondary headings", () => {
      render(<Header />, {
        wrapper: BrowserRouter,
      });
      const secondaryHeadings = screen.getAllByRole("heading", {
        level: 2,
      });
      secondaryHeadings.forEach((heading) =>
        expect(heading).toBeInTheDocument(),
      );
    });

    test("image", () => {
      render(<Header />, {
        wrapper: BrowserRouter,
      });
      const image = screen.getByAltText(/header image/i);
      expect(image).toBeInTheDocument();
    });

    test("CTA button", () => {
      render(<Header />, {
        wrapper: BrowserRouter,
      });
      const ctaButton = screen.getByRole("button");
      expect(ctaButton).toBeInTheDocument();
    });
  });
});
