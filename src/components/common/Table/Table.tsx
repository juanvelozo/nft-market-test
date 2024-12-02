import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

export const CustomTable = ({ columns, rows }: ICustomTable): JSX.Element => {
  return (
    <Table
      aria-label="customTable"
      shadow="none"
      classNames={{
        th: "bg-transparent border-b border-white text-white",
        wrapper: "bg-transparent",
        tr: "font-azeretMonoRegular",
      }}
      removeWrapper
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
interface ICustomTable {
  columns?: TColumns[];
  rows?: TRows[];
}

export type TColumns = {
  key: string;
  label: string;
};

export type TRows = {
  key: string;
  name: string;
  role: string;
  status: string;
};
