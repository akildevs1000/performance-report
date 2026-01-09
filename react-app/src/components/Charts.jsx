function Charts() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* <!-- Chart 1: Yearly Trend --> */}
      <div className="flex flex-col gap-4 rounded-xl border border-[#dbe2e6] bg-white p-6  ">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#111618] ">
              Attendance Trends
            </h3>
            <p className="text-sm text-[#617c89] ">
              Monthly average over the last year
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-[#f0f3f4] p-1 ">
            <button className="rounded bg-white px-3 py-1 text-xs font-bold shadow-sm">
              Line
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-[#617c89] hover:bg-white/50">
              Bar
            </button>
          </div>
        </div>
        {/* <!-- Mock Chart SVG --> */}
        <div className="relative mt-4 h-64 w-full">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 400 150"
          >
            {/* <!-- Grid Lines --> */}
            <line
              stroke="#e5e7eb"
              strokeWidth="1"
              x1="0"
              x2="400"
              y1="150"
              y2="150"
            ></line>
            <line
              stroke="#f3f4f6"
              strokeDasharray="4 4"
              strokeWidth="1"
              x1="0"
              x2="400"
              y1="100"
              y2="100"
            ></line>
            <line
              stroke="#f3f4f6"
              strokeDasharray="4 4"
              strokeWidth="1"
              x1="0"
              x2="400"
              y1="50"
              y2="50"
            ></line>
            {/* <!-- Area Gradient --> */}
            <defs>
              <lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="#13a4ec"
                  stopOpacity="0.2"
                ></stop>
                <stop
                  offset="100%"
                  stopColor="#13a4ec"
                  stopOpacity="0"
                ></stop>
              </lineargradient>
            </defs>
            <path
              d="M0,120 Q40,100 80,110 T160,90 T240,60 T320,80 T400,40 V150 H0 Z"
              fill="url(#chartGradient)"
            ></path>
            {/* <!-- Line --> */}
            <path
              d="M0,120 Q40,100 80,110 T160,90 T240,60 T320,80 T400,40"
              fill="none"
              stroke="#13a4ec"
              strokeLinecap="round"
              strokeWidth="3"
            ></path>
            {/* <!-- Tooltip Point --> */}
            <circle
              cx="320"
              cy="80"
              fill="#13a4ec"
              r="5"
              stroke="white"
              strokeWidth="2"
            ></circle>
          </svg>
          {/* <!-- Tooltip Mock --> */}
          <div className="absolute right-[18%] top-[40%] rounded-lg bg-[#111618] px-2 py-1 text-xs text-white shadow-lg">
            Oct: 97%
          </div>
        </div>
        <div className="flex justify-between px-2 text-xs font-medium text-[#617c89] ">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span> <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>
      {/* <!-- Chart 2: Overtime vs Lost Hours --> */}
      <div className="flex flex-col gap-4 rounded-xl border border-[#dbe2e6] bg-white p-6  ">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#111618] ">
              Efficiency Breakdown
            </h3>
            <p className="text-sm text-[#617c89] ">Overtime vs. Lost Hours</p>
          </div>
          <button className="flex items-center gap-1 text-xs font-medium text-primary">
            View Details
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="relative mt-4 flex h-64 w-full items-end justify-between gap-2 px-2">
          {/* <!-- Grid Background --> */}
          <div className="absolute inset-0 z-0 flex flex-col justify-between py-4">
            <div className="w-full border-t border-dashed border-gray-100"></div>
            <div className="w-full border-t border-dashed border-gray-100"></div>
            <div className="w-full border-t border-dashed border-gray-100"></div>
            <div className="w-full border-t border-dashed border-gray-100"></div>
          </div>
          {/* <!-- Bar Groups (simplified for visual representation) --> */}
          {/* <!-- Item 1 --> */}
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1">
            <div
              className="relative flex w-full flex-col justify-end gap-0.5 rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer group"
              style={{ height: "60%" }}
            >
              <div
                className="w-full rounded-t-sm bg-orange-500"
                style={{ height: "70%" }}
              ></div>
              {/* <!-- Overtime --> */}
              <div
                className="w-full rounded-b-sm bg-red-400"
                style={{ height: "30%" }}
              ></div>
              {/* <!-- Lost --> */}
            </div>
            <span className="text-center text-[10px] text-[#617c89]">Jan</span>
          </div>
          {/* <!-- Item 2 --> */}
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1">
            <div
              className="relative flex w-full flex-col justify-end gap-0.5 rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer group"
              style={{ height: "50%" }}
            >
              <div
                className="w-full rounded-t-sm bg-orange-500"
                style={{ height: "60%" }}
              ></div>
              <div
                className="w-full rounded-b-sm bg-red-400"
                style={{ height: "40%" }}
              ></div>
            </div>
            <span className="text-center text-[10px] text-[#617c89]">Feb</span>
          </div>
          {/* <!-- Item 3 --> */}
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1">
            <div
              className="relative flex w-full flex-col justify-end gap-0.5 rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer group"
              style={{ height: "80%" }}
            >
              <div
                className="w-full rounded-t-sm bg-orange-500"
                style={{ height: "90%" }}
              ></div>
              <div
                className="w-full rounded-b-sm bg-red-400"
                style={{ height: "10%" }}
              ></div>
            </div>
            <span className="text-center text-[10px] text-[#617c89]">Mar</span>
          </div>
          {/* <!-- Spacer for other months (visual simulation) --> */}
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1 opacity-50">
            <div className="w-full bg-gray-200 h-[40%] rounded-t-sm"></div>
            <span className="text-center text-[10px] text-[#617c89]">Apr</span>
          </div>
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1 opacity-50">
            <div className="w-full bg-gray-200 h-[65%] rounded-t-sm"></div>
            <span className="text-center text-[10px] text-[#617c89]">May</span>
          </div>
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1 opacity-50">
            <div className="w-full bg-gray-200 h-[55%] rounded-t-sm"></div>
            <span className="text-center text-[10px] text-[#617c89]">Jun</span>
          </div>
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1 opacity-50">
            <div className="w-full bg-gray-200 h-[70%] rounded-t-sm"></div>
            <span className="text-center text-[10px] text-[#617c89]">Jul</span>
          </div>
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1 opacity-50">
            <div className="w-full bg-gray-200 h-[45%] rounded-t-sm"></div>
            <span className="text-center text-[10px] text-[#617c89]">Aug</span>
          </div>
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1 opacity-50">
            <div className="w-full bg-gray-200 h-[30%] rounded-t-sm"></div>
            <span className="text-center text-[10px] text-[#617c89]">Sep</span>
          </div>
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1 opacity-50">
            <div className="w-full bg-gray-200 h-[85%] rounded-t-sm"></div>
            <span className="text-center text-[10px] text-[#617c89]">Oct</span>
          </div>
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1 opacity-50">
            <div className="w-full bg-gray-200 h-[50%] rounded-t-sm"></div>
            <span className="text-center text-[10px] text-[#617c89]">Nov</span>
          </div>
          <div className="z-10 flex h-full w-full flex-col justify-end gap-1 opacity-50">
            <div className="w-full bg-gray-200 h-[60%] rounded-t-sm"></div>
            <span className="text-center text-[10px] text-[#617c89]">Dec</span>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
            <span className="text-xs font-medium text-[#617c89] ">
              Overtime
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <span className="text-xs font-medium text-[#617c89] ">
              Lost Hours
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
