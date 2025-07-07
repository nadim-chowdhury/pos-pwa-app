import Head from "next/head";
import Link from "next/link";
import { HomeIcon, CubeIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import InstallPrompt from "./InstallPrompt";
import NetworkStatus from "./NetworkStatus";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title = "POS App" }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <InstallPrompt />
      <NetworkStatus />
      <Head>
        <title>{title}</title>
        <meta name="description" content="Point of Sale PWA App" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>

      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                href="/"
                className="flex items-center px-3 py-2 text-sm font-medium"
              >
                <HomeIcon className="h-5 w-5 mr-2" />
                POS
              </Link>
              <Link
                href="/products"
                className="flex items-center px-3 py-2 text-sm font-medium"
              >
                <CubeIcon className="h-5 w-5 mr-2" />
                Products
              </Link>
              <Link
                href="/sales"
                className="flex items-center px-3 py-2 text-sm font-medium"
              >
                <ChartBarIcon className="h-5 w-5 mr-2" />
                Sales
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
