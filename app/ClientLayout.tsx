"use client";
import * as React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Preloader from "@/components/Preloader";
import { LoadingProvider, useLoading } from "@/components/loading-context";

function Layout({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = React.useState(false);
  const { setIsLoading } = useLoading();

  // Fallback: ensure onLoadComplete is called after 7 seconds (extended from 5 seconds)
  React.useEffect(() => {
    if (!loaded) {
      const timeout = setTimeout(() => {
        setLoaded(true);
        setIsLoading(false);
      }, 7000); // Extended from 5000ms to 7000ms
      return () => clearTimeout(timeout);
    }
  }, [loaded, setIsLoading]);

  return (
    <div className="relative">
      {/* Always render main content */}
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {/* Overlay Preloader until loaded */}
      {!loaded && (
        <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
          <Preloader 
            onLoadComplete={() => {
              setLoaded(true);
              setIsLoading(false);
            }}
          >
            <></>
          </Preloader>
        </div>
      )}
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <Layout>{children}</Layout>
    </LoadingProvider>
  );
}
