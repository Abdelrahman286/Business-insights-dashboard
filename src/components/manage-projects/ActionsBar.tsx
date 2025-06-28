"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { RefreshCwIcon, DownloadIcon, SearchIcon } from "lucide-react";

export default function SearchControls() {
  return (
    <div className="flex flex-wrap gap-2 items-center justify-end mb-4">
      {/* Client Dropdown */}
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Client" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="client1">Client 1</SelectItem>
          <SelectItem value="client2">Client 2</SelectItem>
        </SelectContent>
      </Select>

      {/* Manager Dropdown */}
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Manager" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="manager1">Manager 1</SelectItem>
          <SelectItem value="manager2">Manager 2</SelectItem>
        </SelectContent>
      </Select>

      {/* Status Dropdown */}
      <Select>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>

      {/* Advanced Search Button */}
      <Button variant="default" className="flex items-center gap-2">
        <SearchIcon className="w-4 h-4" />
        Advanced Search
      </Button>

      {/* Reload Icon Button */}
      <Button variant="outline" size="icon" aria-label="Reload">
        <RefreshCwIcon className="w-4 h-4" />
      </Button>

      {/* Download Icon Button */}
      <Button variant="outline" size="icon" aria-label="Download">
        <DownloadIcon className="w-4 h-4" />
      </Button>
    </div>
  );
}
