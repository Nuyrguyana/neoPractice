import {AuthForm} from './components/authForm'
import {
    ARCHIVE_ROUTE, CHART_ROUTE,
    CLAIMS_ROUTE,
    CREATE_ROUTE, DATABASE_ROUTE, GLOBE_ROUTE,
    INCOMING_ROUTE,
    LOGIN_ROUTE, NAVIGATION_ROUTE,
    REGISTRATION_ROUTE, SIGN_ROUTE
} from "./components/utils/consts";
import {ClaimsContainer} from "./container/claimsContainer";
import {IncomingClaim} from "./components/incomingClaim";
import {CreatingNewClaim} from "./components/creatingNewClaim";
import {Globe} from "./components/menu/globe";
import {Archive} from "./components/menu/archive";
import {Chart} from "./components/menu/chart";
import {Sign} from "./components/menu/sign";
import {Database} from "./components/menu/database";
import {Navigation} from "./components/menu/navigation";

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
        Component: Globe
    },
     {
        path: ARCHIVE_ROUTE,
        Component: Archive
    },
     {
        path: CHART_ROUTE,
        Component: Chart
    },
     {
        path: SIGN_ROUTE,
        Component: Sign
    },
     {
        path: DATABASE_ROUTE,
        Component: Database
    },
     {
        path: NAVIGATION_ROUTE,
        Component: Navigation
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