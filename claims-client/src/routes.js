import { AuthForm } from './components/authForm'
import {
    ARCHIVE_ROUTE,
    CHART_ROUTE,
    CLAIMS_ROUTE,
    CREATE_ROUTE,
    DATABASE_ROUTE,
    GLOBE_ROUTE,
    INCOMING_ROUTE,
    LOGIN_ROUTE,
    NAVIGATION_ROUTE,
    REGISTRATION_ROUTE,
    SIGN_ROUTE
} from "./components/utils/consts";
import { ClaimsContainer } from "./container/claimsContainer";
import { IncomingClaim } from "./components/incomingClaim";
import { CreatingNewClaim } from "./components/creatingNewClaim";
import { Services } from "./components/menu/services";
import { Storage } from "./components/menu/storage";
import { Charts } from "./components/menu/charts";
import { Currency } from "./components/menu/currency";
import { Base } from "./components/menu/base";
import { Location } from "./components/menu/location";
import iconHome from './image/icon-home.svg'
import iconGlobe from "./image/icon-globe.svg";
import iconArchive from "./image/icon-archive.svg";
import iconPieChart from "./image/icon-pie-chart.svg";
import iconDollarSign from "./image/icon-dollar-sign.svg";
import iconDatabase from "./image/icon-database.svg";
import iconNavigation from "./image/icon-navigation.svg";

export const authRoutes = [

    {
        path: CLAIMS_ROUTE,
        Component: ClaimsContainer
    },
    {
        path: INCOMING_ROUTE + '/:claimId?',
        Component: IncomingClaim
    },
    {
        path: CREATE_ROUTE,
        Component: CreatingNewClaim
    },
    {
        path: GLOBE_ROUTE,
        Component: Services
    },
    {
        path: ARCHIVE_ROUTE,
        Component: Storage
    },
    {
        path: CHART_ROUTE,
        Component: Charts
    },
    {
        path: SIGN_ROUTE,
        Component: Currency
    },
    {
        path: DATABASE_ROUTE,
        Component: Base
    },
    {
        path: NAVIGATION_ROUTE,
        Component: Location
    }

]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthForm
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthForm
    }
]

export const menuItems = [
    {
        path: CLAIMS_ROUTE,
        title: 'home',
        img: iconHome,
        textContent: 'Home'
    },
    {
        path: GLOBE_ROUTE,
        title: 'globe',
        img: iconGlobe,
        textContent: 'Services'
    },
    {
        path: ARCHIVE_ROUTE,
        title: 'archive',
        img: iconArchive,
        textContent: 'Storage'
    },
    {
        path: CHART_ROUTE,
        title: 'chart',
        img: iconPieChart,
        textContent: 'Charts'
    },
    {
        path: SIGN_ROUTE,
        title: 'sign',
        img: iconDollarSign,
        textContent: 'Currency'
    },
    {
        path: DATABASE_ROUTE,
        title: 'database',
        img: iconDatabase,
        textContent: 'Base'
    },
    {
        path: NAVIGATION_ROUTE,
        title: 'navigation',
        img: iconNavigation,
        textContent: 'Location'
    }

]