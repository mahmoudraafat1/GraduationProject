import buyerProfile from "./views/buyerProfile";
import Dashboard from "./views/Dashboard";
import viewImage from "./views/viewImage";
import Ownedpropertys from "./views/Ownedpropertys";
import MakePayment from "./views/MakePayment";
import updateBuyer from "./views/updateBuyer";
import Help from "./Help";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/buyerProfile",
    name: "Buyers Profile",
    rtlName: "الرموز",
    icon: "tim-icons icon-single-02",
    component: buyerProfile,
    layout: "/admin",
  },
  {
    path: "/viewImage",
    name: "property Gallery",
    rtlName: "الرموز",
    icon: "tim-icons icon-image-02",
    component: viewImage,
    layout: "/admin",
  },
  {
    path: "/Ownedpropertys",
    name: "Owned propertys",
    rtlName: "الرموز",
    icon: "tim-icons icon-bank",
    component: Ownedpropertys,
    layout: "/admin",
  },
  {
    path: "/MakePayment",
    name: "Make Payment",
    rtlName: "الرموز",
    icon: "tim-icons icon-money-coins",
    component: MakePayment,
    layout: "/admin",
  },
  {
    path: "/Help",
    name: "Help",
    rtlName: "الرموز",
    icon: "tim-icons icon-single-02",
    component: Help,
    layout: "/admin",
  },
  {
    path: "/updateBuyer",
    name: "",
    rtlName: "الرموز",
    icon: "tim-icons",
    component: updateBuyer,
    layout: "/admin",
  },
];
export default routes;
