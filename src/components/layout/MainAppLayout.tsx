import React from "react";

export default function MainAppLayout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <h1>Hello</h1>
      {children}
    </div>
  );
}
