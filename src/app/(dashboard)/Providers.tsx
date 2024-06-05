"use client";

import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => (
  <AntdRegistry>
    <UserProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </UserProvider>
  </AntdRegistry>
);

export default Providers;
