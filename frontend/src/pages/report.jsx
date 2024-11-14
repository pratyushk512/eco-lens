import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTable } from 'react-table';


const reportData = [
  { id: 1, product: "Widget A", sales: 1000, revenue: 5000 },
  { id: 2, product: "Gadget B", sales: 750, revenue: 3750 },
  { id: 3, product: "Doohickey C", sales: 500, revenue: 2500 },
];

export default function ReportDialog() {
  const data = React.useMemo(() => reportData, []);
  
  const columns = React.useMemo(
    () => [
      {
        Header: 'Product',
        accessor: 'product',
      },
      {
        Header: 'Sales',
        accessor: 'sales',
      },
      {
        Header: 'Revenue',
        accessor: 'revenue',
        Cell: ({ value }) => `$${value}`,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">View Report</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Sales Report</DialogTitle>
            <DialogDescription>
              Summary of product sales and revenue
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <table {...getTableProps()} className="table-auto w-full">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()} className="border p-2">{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return (
                          <td {...cell.getCellProps()} className="border p-2">{cell.render('Cell')}</td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
