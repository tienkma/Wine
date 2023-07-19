// import { AiOutlinePlus } from "react-icons/ai";
// import { RouterName } from "../routers/RouterName";
// import { Avatar, Box, Button, Card, MenuItem } from "@mui/material";
// import DataGridTable from "../components/common/TableData";
// import { Link } from "react-router-dom";
// import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
// import MaterialReactTable, {
//   type MRT_ColumnDef,
//   type MRT_ColumnFiltersState,
//   type MRT_PaginationState,
//   type MRT_SortingState,
// } from "material-react-table";
// import { IconButton, Tooltip } from "@mui/material";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";
// import { getDataAPI } from "../utils/api";
// import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
// import { UserEntity } from "../types/users";
// import PersonIcon from "@mui/icons-material/Person";

// const AdminUserPage = () => {
//   const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>(
//     []
//   );
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [sorting, setSorting] = useState<MRT_SortingState>([]);
//   const [pagination, setPagination] = useState<MRT_PaginationState>({
//     pageIndex: 0,
//     pageSize: 10,
//   });

//   const { data, isError, isFetching, isLoading, refetch } = useQuery<any>({
//     queryKey: [
//       "table-data",
//       columnFilters, //refetch when columnFilters changes
//       globalFilter, //refetch when globalFilter changes
//       pagination.pageIndex, //refetch when pagination.pageIndex changes
//       pagination.pageSize, //refetch when pagination.pageSize changes
//       sorting, //refetch when sorting changes
//     ],
//     queryFn: async () => await getDataAPI(10),
//     keepPreviousData: true,
//   });

//   const columns = useMemo<MRT_ColumnDef<UserEntity>[]>(
//     () => [
//       {
//         accessorKey: "name",
//         header: "Name",
//         size: 400,
//         Cell: ({ cell, renderedCellValue, row }) => {
//           return (
//             <div className="grid grid-cols-[60px_1fr] items-center">
//               {row.original.avatar ? (
//                 <Avatar
//                   src={row.original.avatar}
//                   className="h-20 object-contain "
//                   alt=""
//                 />
//               ) : (
//                 <PersonIcon fontSize={"large"} />
//               )}
//               <p className="mb-0 font-semibold ml-2">
//                 {renderedCellValue ||
//                   `${row.original.firstName} ${row.original.lastName}`}
//               </p>
//             </div>
//           );
//         },
//       },
//       {
//         accessorKey: "email",
//         header: "Email",
//       },
//       {
//         accessorKey: "role",
//         header: "Role",
//         // accessorFn: (row) => (
//         //   <span className="font-medium">{`$${row.price || 0}`}</span>
//         // ),
//       },

//       {
//         accessorKey: "age",
//         header: "Age",
//       },
//       {
//         accessorKey: "phone",
//         header: "Phone",
//       },
//     ],
//     []
//   );

//   return (
//     <div className="bg-indigo-50 flex-grow py-12 px-10 h-full">
//       <Card sx={{ padding: "24px" }}>
//         <div className="flex justify-between mb-4">
//           <form>
//             <label
//               htmlFor="search"
//               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//             >
//               Search
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg
//                   aria-hidden="true"
//                   className="w-5 h-5 text-gray-500 dark:text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   ></path>
//                 </svg>
//               </div>
//               <input
//                 id="search"
//                 className="block w-full p-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 text-font-13 dark:placeholder-gray-400 pr-20 dark:text-white dark:focus:ring-blue-500 outline-0 min-w-[250px] dark:focus:border-blue-500"
//                 placeholder="Search"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="text-white absolute right-2.5 top-1/2  -translate-y-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//           <Link
//             to={RouterName.ADMIN_PRODUCTS_DETAIL.replace(
//               ":id",
//               "create-product"
//             )}
//             type="button"
//             className=" px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm center"
//           >
//             <AiOutlinePlus className="mr-1 " />
//             Add New Product
//           </Link>
//           {/* <div className="items-start justify-between md:flex">
//         <div className="max-w-lg">
//           <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
//             Team members
//           </h3>
//           <p className="text-gray-600 mt-2">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//         </div>
//         <div className="mt-3 md:mt-0">
//           <a
//             className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
//           >
//             Add member
//           </a>
//         </div>
//       </div> */}
//         </div>

//         <MaterialReactTable
//           columns={columns}
//           data={rows || []} //data is undefined on first render
//           initialState={{ showColumnFilters: true }}
//           manualFiltering
//           enableRowSelection
//           manualPagination
//           renderTopToolbarCustomActions={({ table }) => {
//             const handleDeactivate = () => {
//               table.getSelectedRowModel().flatRows.map((row) => {
//                 alert("deactivating " + row.getValue("name"));
//               });
//             };

//             const handleActivate = () => {
//               table.getSelectedRowModel().flatRows.map((row) => {
//                 alert("activating " + row.getValue("name"));
//               });
//             };

//             const handleContact = () => {
//               table.getSelectedRowModel().flatRows.map((row) => {
//                 alert("contact " + row.getValue("name"));
//               });
//             };

//             return (
//               <div style={{ display: "flex", gap: "0.5rem" }}>
//                 <Button
//                   color="error"
//                   disabled={!table.getIsSomeRowsSelected()}
//                   onClick={handleDeactivate}
//                   variant="contained"
//                 >
//                   Deactivate
//                 </Button>
//                 <Button
//                   color="success"
//                   disabled={!table.getIsSomeRowsSelected()}
//                   onClick={handleActivate}
//                   variant="contained"
//                 >
//                   Activate
//                 </Button>
//                 <Button
//                   color="info"
//                   disabled={!table.getIsSomeRowsSelected()}
//                   onClick={handleContact}
//                   variant="contained"
//                 >
//                   Contact
//                 </Button>
//               </div>
//             );
//           }}
//           muiTableHeadCellFilterTextFieldProps={{
//             sx: {
//               "& input": {
//                 boxShadow: "none !important",
//                 border: "none !important",
//                 "--tw-ring-color": "#fff !important",
//               },
//             },
//           }}
//           muiTablePaperProps={{
//             elevation: 0, //change the mui box shadow
//             //customize paper styles
//             sx: {
//               borderRadius: "10px",
//               overflow: "hidden",
//               border: "1px solid #e0e0e0",
//             },
//           }}
//           manualSorting
//           muiToolbarAlertBannerProps={
//             isError
//               ? {
//                   color: "error",
//                   children: "Error loading data",
//                 }
//               : undefined
//           }
//           onColumnFiltersChange={setColumnFilters}
//           onGlobalFilterChange={setGlobalFilter}
//           onPaginationChange={setPagination}
//           onSortingChange={setSorting}
//           displayColumnDefOptions={{
//             "mrt-row-actions": {
//               muiTableHeadCellProps: {
//                 align: "center",
//               },
//               size: 120,
//             },
//           }}
//           enableRowActions
//           positionActionsColumn="last"
//           renderRowActions={({ row, table }) => (
//             <Box sx={{ display: "flex" }}>
//               <IconButton
//                 color="primary"
//                 onClick={() => table.setEditingRow(row)}
//               >
//                 <EditIcon />
//               </IconButton>
//               <IconButton color="error" onClick={() => console.info("Delete")}>
//                 <DeleteIcon />
//               </IconButton>
//             </Box>
//           )}
//           rowCount={data?.meta?.totalRowCount ?? 0}
//           state={{
//             columnFilters,
//             globalFilter,
//             isLoading,
//             pagination,
//             showAlertBanner: isError,
//             showProgressBars: isFetching,
//             sorting,
//           }}
//         />
//       </Card>
//     </div>
//   );
// };

// const queryClient = new QueryClient();

// const ReactQueryUserProvider = () => (
//   <QueryClientProvider client={queryClient}>
//     <AdminUserPage />
//   </QueryClientProvider>
// );

// export default ReactQueryUserProvider;

// const rows: UserEntity[] = [
//   {
//     id: 1,
//     lastName: "Snow",
//     firstName: "Jon",
//     age: 35,
//     email: "tien@gmail.com",
//     role: "user",
//     avatar: "",
//   },
//   {
//     id: 2,
//     lastName: "Lannister",
//     firstName: "Cersei",
//     age: 42,
//     email: "tien@gmail.com",
//     role: "user",
//     avatar: "",
//     phone: "067t8t6e78r6",
//   },
//   {
//     id: 3,
//     lastName: "Lannister",
//     firstName: "Jaime",
//     age: 45,
//     email: "tien@gmail.com",
//     role: "user",
//     phone: "067t8t6e78r6",
//     avatar: "https://www.w3schools.com/howto/img_avatar2.png",
//   },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16, email: "sdfsd" },
//   {
//     id: 5,
//     lastName: "Targaryen",
//     firstName: "Daenerys",
//     phone: "067t8t6e78r6",
//     age: 6,
//     email: "tien@gmail.com",
//     role: "user",
//     avatar: "",
//   },
//   {
//     id: 6,
//     lastName: "Melisandre",
//     phone: "067t8t6e78r6",
//     firstName: "",
//     age: 150,
//     email: "tien@gmail.com",
//     role: "user",
//     avatar: "",
//   },
//   {
//     id: 7,
//     lastName: "Clifford",
//     firstName: "Ferrara",
//     age: 44,
//     email: "tien@gmail.com",
//     role: "user",
//     avatar: "",
//   },
//   {
//     id: 8,
//     lastName: "Frances",
//     firstName: "Rossini",
//     age: 36,
//     email: "tien@gmail.com",
//     role: "user",
//     avatar: "",
//   },
//   {
//     id: 9,
//     lastName: "Roxie",
//     firstName: "Harvey",
//     age: 65,
//     email: "tien@gmail.com",
//     role: "user",
//     avatar: "",
//   },
// ];

// export const AdminUserPagefdsfsd = () => {
//   return (
//     <div className="bg-indigo-50 flex-grow py-12 px-10 h-full">
//       <Card sx={{ padding: "24px" }}>
//         <div className="flex justify-between mb-4">
//           <form>
//             <label
//               htmlFor="search"
//               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//             >
//               Search
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                 <svg
//                   aria-hidden="true"
//                   className="w-5 h-5 text-gray-500 dark:text-gray-400"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   ></path>
//                 </svg>
//               </div>
//               <input
//                 id="search"
//                 className="block w-full p-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 text-font-13 dark:placeholder-gray-400 pr-20 dark:text-white dark:focus:ring-blue-500 outline-0 min-w-[250px] dark:focus:border-blue-500"
//                 placeholder="Search"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="text-white absolute right-2.5 top-1/2  -translate-y-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//           <Link
//             to={RouterName.ADMIN_PRODUCTS_DETAIL.replace(
//               ":id",
//               "create-product"
//             )}
//             type="button"
//             className=" px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm center"
//           >
//             <AiOutlinePlus className="mr-1 " />
//             Add New Product
//           </Link>
//           {/* <div className="items-start justify-between md:flex">
//         <div className="max-w-lg">
//           <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
//             Team members
//           </h3>
//           <p className="text-gray-600 mt-2">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//         </div>
//         <div className="mt-3 md:mt-0">
//           <a
//             className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
//           >
//             Add member
//           </a>
//         </div>
//       </div> */}
//         </div>
//         {/* <DataGridTable columns={columns} rows={rows} /> */}
//       </Card>
//     </div>
//   );
// };

const AdminUser = () => {
  return <></>;
};

export default AdminUser;
