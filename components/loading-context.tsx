"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  progress: number;
  setProgress: (value: number) => void;
  incrementProgress: (increment?: number) => void;
  isReady: boolean;
  setIsReady: (ready: boolean) => void;
  showLoadingOverlay: (message?: string) => void;
  hideLoadingOverlay: () => void;
  loadingMessage: string | null;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null);

  // Increment progress by a specified amount or default to a small random increment
  const incrementProgress = useCallback((increment?: number) => {
    setProgress((prevProgress) => {
      const actualIncrement = increment ?? Math.random() * 2 + 0.5;
      return Math.min(prevProgress + actualIncrement, 100);
    });
  }, []);

  // Show loading overlay with optional custom message
  const showLoadingOverlay = useCallback((message?: string) => {
    setIsLoading(true);
    setProgress(0);
    setIsReady(false);
    setLoadingMessage(message || null);
  }, []);

  // Hide loading overlay
  const hideLoadingOverlay = useCallback(() => {
    setIsLoading(false);
    setProgress(100);
    setIsReady(true);
    setLoadingMessage(null);
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        progress,
        setProgress,
        incrementProgress,
        isReady,
        setIsReady,
        showLoadingOverlay,
        hideLoadingOverlay,
        loadingMessage,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoadingContext() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoadingContext must be used within a LoadingProvider");
  }
  return context;
}

// Alias for backward compatibility
export const useLoading = useLoadingContext;