"use client";

import { Toaster } from "sonner";

export function ToasterProvider() {
  return (
    <Toaster
      position="top-center"
      richColors
      toastOptions={{
        style: {
          borderRadius: "14px",
          border: "1px solid rgba(58, 73, 65, 0.16)",
          background: "rgba(255, 255, 255, 0.94)",
          color: "#1e2a24",
          boxShadow: "0 20px 45px rgba(44, 32, 25, 0.16)",
          backdropFilter: "blur(10px)",
        },
      }}
    />
  );
}
