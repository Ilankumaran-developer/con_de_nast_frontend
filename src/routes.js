
//import TableList from "views/Tables.js";
import NewsContainer from "./containers/NewsContainer";
import NewsDetailContainer from "./containers/NewsDetailContainer"


var routes = [

  {
    path: "/news",
    name: "News",
    icon: "nc-icon nc-tile-56",
    component: NewsContainer,
    layout: "/admin",
  },
  {
    path: "/newsDetail",
    name: "NewsDetails",
    icon: "nc-icon nc-tile-56",
    component: NewsDetailContainer,
    layout: "/admin",
  }

 
];
export default routes;
