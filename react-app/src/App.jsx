import { Routes, Route, Navigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Charts from "./components/Charts";
import MonthlyBreakdownTable from "./components/MonthBreakDownTable";
import PageHeader from "./components/PageHeader";
import ProfileCard from "./components/ProfileCard";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

const DashboardContent = () => {
  const [searchParams] = useSearchParams();

  // 2. Extract values (e.g., ?employeeId=7&company_id=2)
  const employeeId = searchParams.get("employeeId");
  const companyId = searchParams.get("company_id") || "2"; // Default to 2 if missing

  // 1. Create the ref INSIDE the component that renders the content
  const dashboardRef = useRef(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState(new Date("2026-01-01"));
  const [endDate, setEndDate] = useState(new Date("2026-12-31"));

  useEffect(() => {
    const fetchData = async () => {
      if (!startDate || !endDate) return;
      setLoading(true);
      try {
        const formattedFrom = startDate.toISOString().split("T")[0];
        const formattedTo = endDate.toISOString().split("T")[0];

        const response = await fetch(
          "https://backend.mytime2cloud.com/api/performance-report",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              employee_id: [employeeId],
              company_id: parseInt(companyId), // Use the ID from the URL
              report_type: "monthly",
              from_date: formattedFrom,
              to_date: formattedTo,
              department_ids: [],
            }),
          }
        );
        const result = await response.json();
        if (result.data && result.data.length > 0) {
          setData(result.data[0]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [employeeId, companyId, startDate, endDate]);

  if (loading) return <div className="p-20 text-center">Loading...</div>;
  if (!data)
    return (
      <div className="p-20 text-center">No data found for ID: {employeeId}</div>
    );

  return (
    // 2. Attach the ref to the container you want to export as PDF
    <div
      ref={dashboardRef}
      className="mx-auto flex max-w-[1200px] flex-col gap-8"
    >
      <PageHeader
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        dashboardRef={dashboardRef}
      />
      <ProfileCard employee={data.employee} />
      <Stats stats={data} />
      <Charts stats={data} />
      <MonthlyBreakdownTable data={data} />
      <Footer data={data} />
    </div>
  );
};

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light">
      <main className="flex-1 px-4 py-8 lg:px-40">
        <Routes>
          {/* Default to ID 7 or whatever your default is */}
          {/* <Route path="/" element={<Navigate to="/7" replace />} /> */}
          <Route path="/" element={<DashboardContent />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
