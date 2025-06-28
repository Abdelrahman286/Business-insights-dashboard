"use client";
import { Fragment } from "react";
// shadcn table
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";

import CustomeTableHeader from "./TableHeader";
import { cn } from "@/lib/utils";

// tanstack imports
import {
  flexRender,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { getCoreRowModel } from "@tanstack/react-table";

// data
import { useTableData } from "./usetableData";

// utils
import { fuzzyFilter } from "./tableUtils";
import { Input } from "@/components/ui/input";
import PaginationButtons from "./PaginationBar";

const Page = () => {
  const { data, columns }: any = useTableData();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    // sorting
    getSortedRowModel: getSortedRowModel(),

    // filtering
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: fuzzyFilter,

    // pagination
    getPaginationRowModel: getPaginationRowModel(),

    // row selection
    enableRowSelection: true,

    // Expanding rows
    getRowCanExpand: () => true,
  });

  return (
    <div className="select-none bg-background border-2 rounded-2xl px-4 py-4">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <CustomeTableHeader
                      key={header.id}
                      header={header}
                    ></CustomeTableHeader>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Fragment key={row.id}>
                <TableRow
                  className={cn(row.getIsSelected() ? "bg-slate-300" : "")}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
                {row.getIsExpanded() && (
                  <TableRow>
                    <TableCell colSpan={table.getVisibleFlatColumns().length}>
                      <div className="w-full flex flex-col p-4">
                        <div className="w-20 h-20 p-2 m-2 bg-amber-100">1</div>
                        <div className="w-20 h-20 p-2 m-2 bg-amber-100">1</div>
                        <div className="w-20 h-20 p-2 m-2 bg-amber-100">1</div>
                        <div className="w-20 h-20 p-2 m-2 bg-amber-100">1</div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            );
          })}
        </TableBody>

        <TableFooter>
          {table.getFooterGroups().map((footerGroup) => {
            return (
              <TableRow key={footerGroup.id}>
                {footerGroup.headers.map((footer) => {
                  return (
                    <TableHead key={footer.id}>
                      {footer.isPlaceholder
                        ? null
                        : flexRender(
                            footer.column.columnDef.footer,
                            footer.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            );
          })}
        </TableFooter>
      </Table>
      <PaginationButtons table={table}></PaginationButtons>
    </div>
  );
};

export default Page;
