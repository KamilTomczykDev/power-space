import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { useProfiles } from "../../../features/profiles/useProfiles";

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

describe("useProfiles", () => {
  test("resolves defined data", async () => {
    const { result } = renderHook(() => useProfiles(), {
      wrapper,
    });
    await waitFor(() => expect(result.current.profiles).toBeDefined(), {
      timeout: 5000,
    });
  });
});
