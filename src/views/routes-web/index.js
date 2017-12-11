import App from '../containers/App'
import RepoPage from "../containers/RepoPage";
import UserPage from "../containers/UserPage";

export const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/:login/:name',
        component: RepoPage
    },
    {
        path: '/:login',
        component: UserPage
    },
]
