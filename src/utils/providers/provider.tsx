"use client";
import React, { ReactNode, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Provider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Provider;
