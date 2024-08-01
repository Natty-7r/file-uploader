import { Skeleton } from "../ui/skeleton";
import { TableCell, TableHeader, TableRow } from "../ui/table";

export function UPloadTableSkeleton() {
  return (
    <div className="">
      {new Array(5).fill(1).map((_, index) => (
        <TableRow
          className="flex justify-between  mb-4 h-12 gap-4 "
          key={index}
        >
          <TableCell className="relative w-[23%]">
            <Skeleton className="w-full absolute h-full" />
          </TableCell>{" "}
          <TableCell className="relative w-[23%]">
            <Skeleton className="w-full absolute h-full" />
          </TableCell>{" "}
          <TableCell className="relative w-[23%]">
            <Skeleton className="w-full absolute h-full" />
          </TableCell>{" "}
          <TableCell className="relative w-1/4">
            <Skeleton className="w-full absolute h-full" />
          </TableCell>
        </TableRow>
      ))}
    </div>
  );
}
