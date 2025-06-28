import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { User } from "./types";

const PaginationButtons = ({ table }: { table: Table<User> }) => {
  return (
    <div className="flex items-center justify-center gap-2 p-4 bg-slate-100">
      <Button
        variant="outline"
        size="icon"
        title="First Page"
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.firstPage()}
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        // previous page
        disabled={!table.getCanPreviousPage()}
        onClick={() => table.previousPage()}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <span>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </span>
      <Button
        variant="outline"
        size="icon"
        // next page
        disabled={!table.getCanNextPage()}
        onClick={() => table.nextPage()}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button
        title="Last Page"
        variant="outline"
        size="icon"
        disabled={!table.getCanNextPage()}
        onClick={() => table.lastPage()}
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PaginationButtons;
