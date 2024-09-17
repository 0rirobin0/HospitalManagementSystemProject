import React from "react";
import { useDataContext } from "@/context/DataContext";

function WardRoomList() {
  const { wardRoomList } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
    <div className="overflow-auto flex-grow">
      <table className="w-full bg-white table-fixed border-collapse border border-black">
        <thead className="bg-gray-700 text-black sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start border border-black">Ward Name</th>
            <th className="px-3 py-2 text-start border border-black">Room number</th>
            <th className="px-3 py-2 text-start border border-black">Assigned Nurse</th>
            <th className="px-3 py-2 text-start border border-black">Supervising Doctor</th>
            <th className="px-3 py-2 text-start border border-black">Case Summary</th>
            <th className="px-4 py-2 text-start border border-black">Bill</th>
          </tr>
        </thead>
        <tbody>
          {wardRoomList.map((ward, index) => (
            <tr key={index} className="text-center text-black">
              <td className="border-b-2 px-4 py-2 text-start border border-black overflow-hidden whitespace-nowrap text-ellipsis">
                {ward.name}
              </td>
              <td className="border-b-2 px-3 py-2 text-start border border-black overflow-hidden whitespace-nowrap text-ellipsis">
                {ward.bed_number}
              </td>
              <td className="border-b-2 px-3 py-2 text-start border border-black overflow-hidden whitespace-nowrap text-ellipsis">
                {ward.assigned_nurse}
              </td>
              <td className="border-b-2 px-4 py-2 text-start border border-black overflow-hidden whitespace-nowrap text-ellipsis">
                {ward.supervising_doctor}
              </td>
              <td className="border-b-2 px-4 py-2 text-start border border-black overflow-hidden whitespace-nowrap text-ellipsis">
                {ward.case_summary}
              </td>
              <td className="border-b-2 px-5 py-2 text-start border border-black overflow-hidden whitespace-nowrap text-ellipsis">
                {ward.bill}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
}

export default WardRoomList;
