import { HomeIcon, LocationIcon, ServiceIcon } from "../assets/Icons";
import { Home, Map, Services } from "../pages/main";

export const ProtectedRoutes = [
    {
        name: "Home",
        component: Home,
        icon: HomeIcon,
        label: "Anasayfa"
    },
    {
        name: "Map",
        component: Map,
        icon: LocationIcon,
        label: "Harita"
    },
    {
        name: "Services",
        component: Services,
        icon: ServiceIcon,
        label: "Servisler"
    }
]