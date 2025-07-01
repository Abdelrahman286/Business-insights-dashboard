import React from "react";

const LoadingTable = () => {
  return (
    <div className="p-6 rounded-xl bg-background border shadow-sm h-screen">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-muted">
          <thead>
            <tr className="bg-muted/40">
              {Array.from({ length: 4 }).map((_, i) => (
                <th
                  key={i}
                  className="px-6 py-3 text-left text-sm font-medium text-muted-foreground"
                >
                  {/* Empty header cell for shimmer alignment */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="animate-pulse divide-y divide-muted">
            {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i} className="bg-accent/40">
                <td className="px-6 py-4">
                  <div className="h-4 w-32 rounded bg-accent" />
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-40 rounded bg-accent" />
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-20 rounded bg-accent" />
                </td>
                <td className="px-6 py-4">
                  <div className="h-8 w-24 rounded bg-accent" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingTable;
