function MonthlyBreakdownTable() {
  return (
    <div className="rounded-xl border border-[#dbe2e6] bg-white">
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 border-b border-[#f0f3f4] ">
        <p className="font-bold text-[#111618] ">Monthly Breakdown</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#f8f9fa] text-[#617c89]">
            <tr>
              <th className="px-6 py-4 font-semibold">Month</th>
              <th className="px-6 py-4 font-semibold">Present</th>
              <th className="px-6 py-4 font-semibold">Absent</th>
              <th className="px-6 py-4 font-semibold">Leave</th>
              <th className="px-6 py-4 font-semibold">Total Hours</th>
              <th className="px-6 py-4 font-semibold">Overtime</th>
              <th className="px-6 py-4 font-semibold">Lost Hours</th>
              <th className="px-6 py-4 font-semibold">Punctuality</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0f3f4]">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-bold text-[#111618] ">January</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700  ">
                    20
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ">
                    1
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
                    1
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 text-[#111618] ">168 h</td>
              <td className="px-6 py-4 text-orange-600 font-medium">4 h</td>
              <td className="px-6 py-4 text-[#617c89] ">-</td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-16 rounded-full bg-[#f0f3f4] ">
                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{ height: "98%" }}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-[#111618] ">
                    98%
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MonthlyBreakdownTable;
