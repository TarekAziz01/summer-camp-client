import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useInstructor from "../hook/useInstructor";

const Dashboard = () => {

    //TODO: set dynamic user role
    // const isAdmin = true;
  const [isAdmin] = useAdmin();
    // const isInstructor = false;
  const [isInstructor] = useInstructor();
    const isUser = false;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/manageClasses">Manage classes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
              </li>
            </>
          )}
          {isInstructor && (
            <>
              <li>
                <NavLink to="/dashboard/addClass">Add class</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClasses">My classes</NavLink>
              </li>
            </>
          )}
          {isUser && (
            <>
              <li>
                <NavLink to="/dashboard/selectedClasses">
                  My Selected classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledClasses">
                  My Enrolled classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">Payment</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  Payment History
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
