import Sidebar from "../common/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full bg-green-1">Good Morning</div>
    </div>
  );
};

export default AdminDashboard;
