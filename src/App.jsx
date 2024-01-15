import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { UnitProvider } from "./contexts/unitContext";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import LoginForm from "./features/authentication/LoginForm";
import SignupForm from "./features/authentication/SignUpForm";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Ranking from "./pages/Ranking";
import Profile from "./features/profiles/Profile";
import Friends from "./pages/Friends";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UnitProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<Login />}>
              <Route index element={<LoginForm />} />
              <Route path="signup" element={<SignupForm />} />
            </Route>
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
              <Route path="ranking" element={<Ranking />} />
              <Route path="ranking/:id" element={<Profile />} />
              <Route path="friends" element={<Friends />} />
              <Route path="friends/:id" element={<Profile />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#292524",
              color: "white",
            },
          }}
        />
      </UnitProvider>
    </QueryClientProvider>
  );
}

export default App;
