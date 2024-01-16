import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import React from "react";
import AppTableHead from "./appTableHead";
import AppTableBody from "./appTableBody";
import TablePagination from "@mui/material/TablePagination";
import { Column, Data } from "./tableInterfaces";
import { useTranslation } from "react-i18next";

interface Props {
  columns: readonly Column[];
  rows: Data[];
}

const AppTable: React.FC<Props> = ({ columns, rows }) => {
  const [t, i18n] = useTranslation();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(50);

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
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <AppTableHead columns={columns} />
          <AppTableBody
            rows={rows}
            page={page}
            rowsPerPage={rowsPerPage}
            columns={columns}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 50, { value: -1, label: "All" }]}
        labelRowsPerPage={t(`ShipmentDetails.Table.RowsPerPage`)}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default AppTable;
