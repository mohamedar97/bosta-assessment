import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

interface Column {
  id: "Branch" | "Date" | "Time" | "Details";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

interface Data {
  Branch: string;
  Date: string;
  Time: string;
  Details: string;
}

function createData(
  Branch: string,
  Date: string,
  Time: string,
  Details: string
): Data {
  return { Branch, Date, Time, Details };
}

const rows = [
  createData("مدينة نصر", "05/04/2020", "12:30 AM", "تم انشاء الشحنة"),

  createData("India", "IN", "IN", "IN"),
  createData("India", "IN", "IN", "IN"),
  createData("India", "IN", "IN", "IN"),
  createData("India", "IN", "IN", "IN"),
];

export default function ShipmentDetails() {
  const [t, i18n] = useTranslation();
  const alignment = i18n.language === "ar" ? "right" : undefined;
  const columns: readonly Column[] = [
    {
      id: "Branch",
      label: t(`ShipmentDetails.Table.one`),
      minWidth: 170,
      align: alignment,
    },
    {
      id: "Date",
      align: alignment,
      label: t(`ShipmentDetails.Table.two`),
      minWidth: 100,
    },
    {
      id: "Time",
      label: t(`ShipmentDetails.Table.three`),
      minWidth: 170,
      align: alignment,
      format: (value: number) => value.toLocaleString("en-US"),
    },
    {
      id: "Details",
      label: t(`ShipmentDetails.Table.four`),
      minWidth: 170,
      align: alignment,
      format: (value: number) => value.toLocaleString("en-US"),
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Typography marginBottom={10} variant="h5">
        {t(`ShipmentDetails.Title`)}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          border: "1px solid #ddd",
          borderRadius: "4px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.Details}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
        // rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={100}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      </Paper>
    </>
  );
}
