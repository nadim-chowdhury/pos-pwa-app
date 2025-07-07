"use client";

import { useEffect } from "react";
import { usePosStore } from "../stores/posStore";
import { WifiIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";

export default function NetworkStatus() {
  const { isOnline, pendingSyncCount, updateOnlineStatus, syncWithCloud } =
    usePosStore();

  useEffect(() => {
    const handleOnline = () => {
      updateOnlineStatus();
      // Auto-sync when coming back online
      syncWithCloud();
    };

    const handleOffline = () => {
      updateOnlineStatus();
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [updateOnlineStatus, syncWithCloud]);

  if (isOnline && pendingSyncCount === 0) {
    return null; // Don't show anything when online and synced
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      {!isOnline && (
        <div className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
          <WifiIcon className="h-5 w-5" />
          <span className="text-sm font-medium">Offline Mode</span>
        </div>
      )}

      {isOnline && pendingSyncCount > 0 && (
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2">
          <CloudArrowUpIcon className="h-5 w-5 animate-pulse" />
          <span className="text-sm font-medium">
            Syncing {pendingSyncCount} items...
          </span>
        </div>
      )}
    </div>
  );
}
