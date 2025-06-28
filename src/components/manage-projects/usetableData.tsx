"use client";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import { useState } from "react";
import { USERS } from "./data";
import { User } from "./types";

import { Trash } from "lucide-react";

const DISPLAY_COLUMN_SIZE = 100;

const columnHelper = createColumnHelper<User>();

import { Checkbox } from "../../components/ui/checkbox";

export const useTableData = () => {
  const [data, setData] = useState(USERS);

  const columns = [
    columnHelper.display({
      id: "selection",
      header: ({ table }) => (
        <div>
          <Checkbox className="size-6  border-accent-foreground"></Checkbox>
        </div>
      ),
      cell: ({ row }) => (
        <div>
          <Checkbox
            onChange={row.getToggleSelectedHandler()}
            checked={row.getIsSelected()}
            className="size-6  border-accent-foreground"
          ></Checkbox>
        </div>
      ),
      size: DISPLAY_COLUMN_SIZE,
    }),
    ,
    columnHelper.display({
      id: "action",
      header: "Action",
      cell: ({ row }) => (
        <div>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
          <Checkbox></Checkbox>
        </div>
      ),
      size: DISPLAY_COLUMN_SIZE,
    }),

    columnHelper.accessor("id", {
      id: "id",
      header: "Id",
      size: DISPLAY_COLUMN_SIZE,
    }),

    columnHelper.accessor("name", {
      id: "name",
      header: "Name",
    }),

    columnHelper.accessor("birthDate", {
      id: "birthDate",
      header: "Birth Date",
      cell: ({ getValue }) => moment(getValue()).format("DD/MM/YYYY"),
    }),
    columnHelper.accessor("age", {
      id: "age",
      header: "Age",
      size: DISPLAY_COLUMN_SIZE,
      footer: ({ table }) =>
        table.getFilteredRowModel().rows.reduce((acc, val) => {
          acc += Number(val.getValue("age"));
          return acc;
        }, 0),
    }),
    columnHelper.display({
      id: "delete",
      header: () => <div>Delete</div>,
      cell: ({ row }) => (
        <div
          className="w-10 h-10 bg-red-400 rounded-3xl flex justify-center items-center hover:bg-red-700"
          onClick={() => {
            setData((prev) => {
              return prev.filter((user) => {
                return user?.id !== row.original.id;
              });
            });
          }}
        >
          <Trash></Trash>
        </div>
      ),
      size: DISPLAY_COLUMN_SIZE,
    }),
  ];

  const columnIds = () => columns.map((column) => column?.id) as string[];

  const initialColumnVisibility = columnIds().reduce(
    (acc: { [id: string]: boolean }, val) => {
      acc[val] = true;
      return acc;
    },
    {}
  );

  return { columns, data, initialColumnVisibility, columnIds };
};
