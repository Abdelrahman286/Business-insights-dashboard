import React from "react";
import type { Table } from "@tanstack/react-table";
import { TableCell } from "@/components/ui/table";

// Define props type with generic
type SubRowProps<TData> = {
  table: Table<TData>;
};

const SubRow = <TData,>({ table }: SubRowProps<TData>) => {
  return (
    <TableCell colSpan={table.getVisibleFlatColumns().length}>
      <div className="w-full flex flex-col p-4">
        <div className="w-20 h-20 p-2 m-2 bg-amber-100">1</div>
        <div className="w-20 h-20 p-2 m-2 bg-amber-100">1</div>
        <div className="w-20 h-20 p-2 m-2 bg-amber-100">1</div>
        <div className="w-20 h-20 p-2 m-2 bg-amber-100">1</div>
      </div>
    </TableCell>
  );
};

export default SubRow;
