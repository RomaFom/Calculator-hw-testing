import React from "react";

type TProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: TProps) {
  return (
    <div className="mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-purple-900 shadow-lg border rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6">
      {children}
    </div>
  );
}
