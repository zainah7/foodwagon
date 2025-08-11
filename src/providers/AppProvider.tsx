"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import AppToast from "@/components/AppToast"; // Optional

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <AppToast /> */}
    </QueryClientProvider>
  );
};

export default AppProvider;
