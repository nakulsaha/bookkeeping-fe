import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        //component: Dashboard,
      },
      {
        path: "income",
        name: "Income",
        //component: UserProfile,
      },
      {
        path: "expense",
        name: "Expense",
       //component: Typography,
      },
      {
        path: "reconciliation",
        name: "Reconciliation",
        component: TableList,
      }
    ],
  },
];

export default routes;
