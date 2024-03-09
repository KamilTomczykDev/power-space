import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { Children } from "react";
import { BrowserRouter } from "react-router-dom";

export const renderWithClient = (element) => {
  const queryClient = new QueryClient();
  const wrapper = () => {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          {Children}
        </QueryClientProvider>
      </BrowserRouter>
    );
  };

  render(element, {
    wrapper,
  });
  return render;
};
