import { TableHead } from "@/components/ui/table";
import { flexRender, Header } from "@tanstack/react-table";
import { User } from "./types";

import { SortAsc, SortDesc } from "lucide-react"; // import SortDesc

interface TableHeaderProps {
  header: Header<User, unknown>;
}

const CustomeTableHeader = ({ header }: TableHeaderProps) => {
  const ACCEPTEDIDS = ["name", "age"];
  const isShowSort = ACCEPTEDIDS.includes(header.getContext().column.id);
  const sortDirection = header.column.getIsSorted(); // "asc", "desc", or false

  return (
    <TableHead>
      <div className="flex gap-2 cursor-pointer items-center">
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}

        {isShowSort ? (
          <div onClick={header.column.getToggleSortingHandler()}>
            {sortDirection === "desc" ? <SortDesc /> : <SortAsc />}
          </div>
        ) : null}
      </div>
    </TableHead>
  );
};

export default CustomeTableHeader;
