import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

interface DataGridTableProps extends DataGridProps {}

export default function DataGridTable(props: DataGridTableProps) {
  const { rows, columns } = props;
  const tableItems = [
    {
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Liam James",
      email: "liamjames@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Software engineer",
      salary: "$100K",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Product designer",
      salary: "$90K",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Front-end developer",
      salary: "$80K",
    },
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Laravel engineer",
      salary: "$120K",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      phone_nimber: "+1 (555) 000-000",
      position: "Open source manager",
      salary: "$75K",
    },
  ];

  const [areAllChecked, setAllChecked] = useState(false);
  let [checkboxItems, setCheckboxItem] = useState<Record<string, any>>({});

  // set or unset all checkbox items
  const handleCheckboxItems = () => {
    setAllChecked(!areAllChecked);
    tableItems.forEach((item, idx) => {
      checkboxItems[`checkbox${idx}`] = !areAllChecked;
      setCheckboxItem({ ...checkboxItems });
    });
  };

  // Update checked value
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    setAllChecked(false);
    setCheckboxItem({ ...checkboxItems, [`checkbox${idx}`]: e.target.checked });
  };

  useEffect(() => {
    // Set properties with false value
    tableItems.forEach((item, idx) => {
      checkboxItems[`checkbox${idx}`] = false;
      setCheckboxItem({ ...checkboxItems });
    });
  }, []);

  useEffect(() => {
    // Check if all checkbox items are checked and update setAllChecked state
    const checkboxItemsVal = Object.values(checkboxItems);
    const checkedItems = checkboxItemsVal.filter((item) => item == true);
    if (checkedItems.length == tableItems.length) setAllChecked(true);
  }, [checkboxItems]);

  return (
    <div className="">
      <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6 flex items-center gap-x-4">
                <div>
                  <input
                    type="checkbox"
                    id="checkbox-all-items"
                    className="checkbox-item peer hidden"
                    checked={areAllChecked}
                    onChange={handleCheckboxItems}
                  />
                  <label
                    htmlFor="checkbox-all-items"
                    className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                  ></label>
                </div>
                Username
              </th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Salary</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableItems.map((item, idx) => (
              <tr key={idx} className="odd:bg-gray-50 even:bg-white">
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-4">
                  <div className="center">
                    <input
                      type="checkbox"
                      id={`checkbox-${idx}`}
                      name={`checkbox-${idx}`}
                      className="checkbox-item peer hidden"
                      checked={checkboxItems[`checkbox${idx}`]}
                      onChange={(e) => handleCheckboxChange(e, idx)}
                    />
                    <label
                      htmlFor={`checkbox-${idx}`}
                      className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                    ></label>
                    <img src={item.avatar} className="w-10 ml-3 h-10 rounded-full" />
                    <div className="ml-3">
                      <span className="block text-gray-700 text-sm font-medium">
                        {item.name}
                      </span>
                      <span className="block text-gray-700 text-xs">
                        {item.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                <td className="text-right px-6 whitespace-nowrap">
                  <button className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Edit
                  </button>
                  <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
