function Stats({ data }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* <!-- Stat Card 1 --> */}
      <div className="flex flex-col gap-3 rounded-xl border border-[#dbe2e6] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center rounded-lg bg-blue-50 p-2 text-blue-600">
            <span className="material-symbols-outlined">schedule</span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-700  ">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>
            +5.2%
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-[#617c89] ">
            Total Working Hours
          </p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-[#111618] ">
            {data.total_hrs}
          </p>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-[#f0f3f4] ">
          <div className="h-full w-[85%] rounded-full bg-blue-500"></div>
        </div>
      </div>
      {/* <!-- Stat Card 2 --> */}
      <div className="flex flex-col gap-3 rounded-xl border border-[#dbe2e6] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center rounded-lg bg-purple-50 p-2 text-purple-600">
            <span className="material-symbols-outlined">timer</span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-700  ">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>
            +2.1%
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-[#617c89] ">
            Avg. Punctuality
          </p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-[#111618] ">
            {data.total_punctuality}
          </p>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-[#f0f3f4] ">
          <div className="h-full w-[96%] rounded-full bg-purple-500"></div>
        </div>
      </div>
      {/* <!-- Stat Card 3 --> */}
      <div className="flex flex-col gap-3 rounded-xl border border-[#dbe2e6] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center rounded-lg bg-orange-50 p-2 text-orange-600">
            <span className="material-symbols-outlined">
              history_toggle_off
            </span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-bold text-red-600 ">
            <span className="material-symbols-outlined text-sm">
              trending_down
            </span>
            -10%
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-[#617c89] ">Total Overtime</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-[#111618] ">
            {data.total_ot_hrs}
          </p>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-[#f0f3f4] ">
          <div className="h-full w-[35%] rounded-full bg-orange-500"></div>
        </div>
      </div>
      {/* <!-- Stat Card 4 --> */}
      <div className="flex flex-col gap-3 rounded-xl border border-[#dbe2e6] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]  ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center rounded-lg bg-emerald-50 p-2 text-emerald-600">
            <span className="material-symbols-outlined">event_available</span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-700  ">
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>
            +0.5%
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-[#617c89] ">Attendance Rate</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-[#111618] ">
            {data.total_attendance_rate}
          </p>
        </div>
        <div className="h-1 w-full overflow-hidden rounded-full bg-[#f0f3f4] ">
          <div className="h-full w-[98.5%] rounded-full bg-emerald-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
