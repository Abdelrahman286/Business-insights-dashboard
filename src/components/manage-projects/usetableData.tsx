"use client";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";
import { useState } from "react";
import { Projects } from "./data";
import { Project } from "./types";

const columnHelper = createColumnHelper<Project>();

import { Checkbox } from "../../components/ui/checkbox";
import {
  Eye,
  EyeOff,
  Mail,
  Ellipsis,
  Trash,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const useTableData = () => {
  const [data, setData] = useState(Projects);

  const columns = [
    columnHelper.display({
      id: "selection",
      header: ({ table }) => (
        <div>
          <Checkbox className="size-5  border-accent-foreground"></Checkbox>
        </div>
      ),
      cell: ({ row }) => (
        <div>
          <Checkbox
            // onChange={row.getToggleSelectedHandler()}
            // checked={row.getIsSelected()}
            className="size-5  border-accent-foreground"
          ></Checkbox>
        </div>
      ),
    }),
    ,
    columnHelper.display({
      id: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex flex-row gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={row.getToggleExpandedHandler()}
          >
            {row.getIsExpanded() ? (
              <EyeOff className="text-blue-500" />
            ) : (
              <Eye className="text-blue-500" />
            )}
          </Button>

          <Button variant={"outline"} size={"icon"}>
            <Mail></Mail>
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <Ellipsis></Ellipsis>
          </Button>
        </div>
      ),
    }),

    columnHelper.accessor("projectName", {
      id: "projectName",
      header: "Project Name",
    }),

    columnHelper.accessor("projectTitle", {
      id: "projectTitle",
      header: "Project Title",
    }),

    columnHelper.accessor("clientName", {
      id: "clientName",
      header: "Client Name",
    }),

    columnHelper.accessor("complete", {
      id: "complete",
      header: "Complete",

      cell: ({ row }) => {
        const data = row?.original?.complete;
        return (
          <div className=" gap-2 flex flex-row ">
            <div className="bg-accent py-1 px-2 rounded">{data?.fraction}</div>

            {data?.arrow == "up" ? (
              <TrendingUp className={"text-green-300"}></TrendingUp>
            ) : (
              <TrendingDown className="text-red-400"></TrendingDown>
            )}
            <div
              className={cn(
                data?.arrow == "up" ? "text-green-500" : "text-red-500"
              )}
            >
              {data?.percentage}
            </div>
          </div>
        );
      },
    }),

    columnHelper.accessor("st", {
      id: "st",
      header: "ST",

      cell: ({ row }) => {
        return (
          <div className="flex flex-row items-center gap-2">
            <div>{row.original.st}</div>
            <div className="w-2 h-4 bg-blue-400 rounded-2xl"></div>
          </div>
        );
      },
    }),
    columnHelper.accessor("dq", {
      id: "dq",
      header: "DQ",

      cell: ({ row }) => {
        return (
          <div className="flex flex-row items-center gap-2">
            <div>{row.original.dq}</div>
            <div className="w-2 h-4 bg-cyan-400 rounded-2xl"></div>
          </div>
        );
      },
    }),

    columnHelper.accessor("qt", {
      id: "qt",
      header: "QT",

      cell: ({ row }) => {
        return (
          <div className="flex flex-row items-center gap-2">
            <div>{row.original.qt}</div>
            <div className="w-2 h-4 bg-purple-400 rounded-2xl"></div>
          </div>
        );
      },
    }),

    columnHelper.accessor("status", {
      id: "status",
      header: "Status",

      cell: ({ row }) => {
        const data = row.original.status;
        return (
          <div
            className={cn(
              "rounded-xl  py-1 px-3 w-fit text-sm",
              data == "Active" ? "bg-green-200" : "",
              data == "Pending" ? "bg-orange-200" : "",
              data == "Closed" ? "bg-red-200" : "",
              data == "Progress" ? "bg-blue-200" : ""
            )}
          >
            {data}
          </div>
        );
      },
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
