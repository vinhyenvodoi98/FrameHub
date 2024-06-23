"use client";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import { base } from 'viem/chains';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/config/wagmi";

import 'react-toastify/ReactToastify.min.css';
import '@coinbase/onchainkit/styles.css';

type Props = {
  children: React.ReactNode;
  cookie?: string | null;
};

const queryClient = new QueryClient();

export default function Providers({ children, cookie }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider apiKey={process.env.COINBASE_API} chain={base}>
          <div className="relative">
            <div className="absolute w-screen">
              <Header />
            </div>
            <ToastContainer position="bottom-right" newestOnTop />
            {children}
          </div>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}