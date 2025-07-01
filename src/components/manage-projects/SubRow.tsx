import React from "react";
import type { Table } from "@tanstack/react-table";
import { TableCell } from "@/components/ui/table";

import {
  Info,
  Link,
  BarChart,
  Shield,
  FileQuestion,
  FileCheck,
  Users,
  Filter,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Tabs
import ProjectInformation from "./tabs/ProjectInformation";
import Quota from "./tabs/Quota";
import Securities from "./tabs/Securities";
// Define props type with generic
type SubRowProps<TData> = {
  table: Table<TData>;
};

const SubRow = <TData,>({ table }: SubRowProps<TData>) => {
  return (
    <TableCell colSpan={table.getVisibleFlatColumns().length}>
      <Tabs defaultValue="account" className="rounded-md  border-gray-300  ">
        <TabsList>
          <TabsTrigger value="account">
            <Info className="w-4 h-4 " />
            Project Information
          </TabsTrigger>

          <TabsTrigger value="quota">
            <BarChart className="w-4 h-4 " />
            Quota
          </TabsTrigger>

          <TabsTrigger value="securities">
            <Shield className="w-4 h-4 " />
            Securities
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="bg-background m-0 p-0">
          <ProjectInformation></ProjectInformation>
        </TabsContent>

        <TabsContent value="quota" className="bg-background m-0 p-0">
          <Quota></Quota>
        </TabsContent>

        <TabsContent value="securities" className="bg-background m-0 p-0">
          <Securities></Securities>
        </TabsContent>
      </Tabs>
    </TableCell>
  );
};

export default SubRow;
