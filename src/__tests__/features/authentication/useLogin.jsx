import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { useLogin } from "../../../features/authentication/useLogin";

const wrapper = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
};

describe("Asynchronous custom hook", () => {
  test("resolves", async () => {
    const { result } = renderHook(() => useLogin(), {
      wrapper,
    });
    await waitFor(() => expect(result.current.isLoading).toBe(false), {
      timeout: 5000,
    });
  });
});
