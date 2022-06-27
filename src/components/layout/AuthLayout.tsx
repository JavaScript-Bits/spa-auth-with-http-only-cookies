import React from "react";

export default function AuthLayout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <h1>Auth Page</h1>
      {children}
    </div>
  );
}
