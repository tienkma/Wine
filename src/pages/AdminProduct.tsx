import { Card } from "@mui/material";
import DataGridTable from "../components/common/TableData"
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RouterName } from "../routers/RouterName";



const columns: any = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: any) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  

export const AdminProductPage = () => {
    return <div className="bg-indigo-50 flex-grow py-12 px-10">
        <Card sx={{padding: '24px'}}>
        <div className="flex justify-between mb-4">
        <form>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              id="search"
              className="block w-full p-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 text-font-13 dark:placeholder-gray-400 pr-20 dark:text-white dark:focus:ring-blue-500 outline-0 min-w-[250px] dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 top-1/2  -translate-y-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <Link to={RouterName.ADMIN_PRODUCTS_DETAIL.replace(":id", "create-product")}
          type="button"
          className="focus:outline-none text-white bg-green-600/80 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-green-600 dark:hover:bg-green-600/80 dark:focus:ring-green-600 flex items-center m-0"
        >
          <AiOutlinePlus className="mr-1 " />
          Add New Product
        </Link>
      </div>
    <DataGridTable  columns={columns} rows={rows} />
        </Card>
    </div>
    
}