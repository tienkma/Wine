import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { AiOutlinePlus } from "react-icons/ai";

interface DataGridTableProps extends DataGridProps {}

export default function DataGridTable(props: DataGridTableProps) {
  const { rows, columns } = props;
  return (
    // <Box
    //   sx={{
    //     height: "100%",
    //     width: "100%",
    //     background: "#fff",
    //     padding: "24px",
    //   }}
    // >
      
      <DataGrid
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[20]}
        checkboxSelection
        disableRowSelectionOnClick
        {...props}
      />
    // </Box>
  );
}
