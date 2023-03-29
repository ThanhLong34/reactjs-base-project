import Home from "@/pages/Home";
import About from "@/pages/About";
import Shop from "@/pages/Shop";

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/shop",
		component: Shop,
	},
];

export { routes };
