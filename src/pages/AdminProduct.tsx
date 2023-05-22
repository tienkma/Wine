import { Box, Button, Card, MenuItem } from "@mui/material";
import DataGridTable from "../components/common/TableData";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RouterName } from "../routers/RouterName";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import MaterialReactTable, {
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_PaginationState,
  type MRT_SortingState,
} from "material-react-table";
import { IconButton, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getDataAPI } from "../utils/api";
import { ProductEntity } from "../types/products";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

export const AdminProductPage = () => {
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<MRT_SortingState>([]);
  const [pagination, setPagination] = useState<MRT_PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data, isError, isFetching, isLoading, refetch } = useQuery<any>({
    queryKey: [
      "table-data",
      columnFilters, //refetch when columnFilters changes
      globalFilter, //refetch when globalFilter changes
      pagination.pageIndex, //refetch when pagination.pageIndex changes
      pagination.pageSize, //refetch when pagination.pageSize changes
      sorting, //refetch when sorting changes
    ],
    queryFn: async () => await getDataAPI(10),
    keepPreviousData: true,
  });

  const columns = useMemo<MRT_ColumnDef<ProductEntity>[]>(
    () => [
      {
        accessorKey: "wine",
        header: "Wine",
        size: 500,
        Cell: ({ cell, renderedCellValue, row }) => {
          return (
            <div className="grid grid-cols-[60px_1fr] items-center">
              <img
                src={row.original.image}
                className="h-20 object-contain "
                alt=""
              />
              <p className="mb-0 font-semibold">{renderedCellValue}</p>
            </div>
          );
        },
      },
      {
        accessorKey: "winery",
        header: "Winery",
      },
      {
        accessorKey: "price",
        header: "Price",
        accessorFn: (row) => (
          <span className="font-medium">{`$${row.price || 0}`}</span>
        ),
      },

      {
        accessorKey: "discount",
        header: "Discount",
        accessorFn: (row) => (
          <span className="font-medium">{`${row.discount || 0}%`}</span>
        ),
      },
      {
        accessorKey: "available",
        header: "Available",
      },
    ],
    []
  );

  return (
    <div className="bg-indigo-50 flex-grow py-12 px-10 h-full">
      <Card sx={{ padding: "24px" }}>
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Products</h1>
          <Link
            to={RouterName.ADMIN_PRODUCTS_DETAIL.replace(
              ":id",
              "create-product"
            )}
            type="button"
            className=" px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm center"
          >
            <AiOutlinePlus className="mr-1 " />
            Add New Product
          </Link>
        </div>

        <MaterialReactTable
          columns={columns}
          data={data || []} //data is undefined on first render
          initialState={{ showColumnFilters: true }}
          manualFiltering
          enableFilterMatchHighlighting={false}
          enableRowSelection
          manualPagination
          enableColumnFilterModes
          columnFilterModeOptions={null}
          renderTopToolbarCustomActions={({ table }) => {
            const handleDeactivate = () => {
              table.getSelectedRowModel().flatRows.map((row) => {
                alert("deactivating " + row.getValue("name"));
              });
            };

            const handleActivate = () => {
              table.getSelectedRowModel().flatRows.map((row) => {
                alert("activating " + row.getValue("name"));
              });
            };

            const handleContact = () => {
              table.getSelectedRowModel().flatRows.map((row) => {
                alert("contact " + row.getValue("name"));
              });
            };

            return (
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button
                  color="error"
                  disabled={!table.getIsSomeRowsSelected()}
                  onClick={handleDeactivate}
                  variant="contained"
                >
                  Deactivate
                </Button>
                <Button
                  color="success"
                  disabled={!table.getIsSomeRowsSelected()}
                  onClick={handleActivate}
                  variant="contained"
                >
                  Activate
                </Button>
                <Button
                  color="info"
                  disabled={!table.getIsSomeRowsSelected()}
                  onClick={handleContact}
                  variant="contained"
                >
                  Contact
                </Button>
              </div>
            );
          }}
          muiTableHeadCellFilterTextFieldProps={{
            sx: {
              "& input": {
                boxShadow: "none !important",
                border: "none !important",
                "--tw-ring-color": "#fff !important",
              },
            },
          }}
          muiTablePaperProps={{
            elevation: 0, //change the mui box shadow
            //customize paper styles
            sx: {
              borderRadius: "10px",
              overflow: "hidden",
              border: "1px solid #e0e0e0",
            },
          }}
          manualSorting
          muiToolbarAlertBannerProps={
            isError
              ? {
                  color: "error",
                  children: "Error loading data",
                }
              : undefined
          }
          enableGlobalFilter={false}
          onColumnFiltersChange={setColumnFilters}
          onPaginationChange={setPagination}
          onSortingChange={setSorting}
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 120,
            },
          }}
          enableRowActions
          positionActionsColumn="last"
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex" }}>
              <IconButton
                color="primary"
                onClick={() => table.setEditingRow(row)}
              >
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => console.info("Delete")}>
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
          rowCount={data?.meta?.totalRowCount ?? 0}
          state={{
            columnFilters,
            isLoading,
            pagination,
            showAlertBanner: isError,
            showProgressBars: isFetching,
            sorting,
          }}
        />
      </Card>
    </div>
  );
};

const queryClient = new QueryClient();

const ExampleWithReactQueryProvider = () => (
  <QueryClientProvider client={queryClient}>
    <AdminProductPage />
  </QueryClientProvider>
);

export default ExampleWithReactQueryProvider;
