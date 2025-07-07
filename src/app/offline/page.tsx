"use client";

import Layout from "@/components/Layout";
import { WifiIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { usePosStore } from "@/stores/posStore";

export default function Offline() {
  const { pendingSyncCount, syncWithCloud } = usePosStore();

  return (
    <Layout title="Offline">
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <WifiIcon className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            You&apos;re Offline
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            It looks like you&apos;ve lost your internet connection. Your POS
            app will continue to work offline, and data will sync when
            you&apos;re back online.
          </p>

          {pendingSyncCount > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <CloudArrowUpIcon className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-medium">
                  {pendingSyncCount} items waiting to sync
                </span>
              </div>
              <p className="text-blue-700 text-sm">
                These will automatically sync when you&apos;re back online
              </p>
            </div>
          )}

          <div className="space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => syncWithCloud()}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
            >
              Manual Sync
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
