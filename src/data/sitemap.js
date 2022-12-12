import AirplaneSVG from "../svgs/Sidebar/airplane";
import DashboardSVG from "../svgs/Sidebar/dashboard";
import LaunchpadSVG from "../svgs/Sidebar/launchpad";
import MoreProductsSVG from "../svgs/Sidebar/more_products";
import SheildSecuritySVG from "../svgs/Sidebar/shield_security";

export const sitemap = [
    {
        id:1,
        name: 'Dashboard',
        extendable: false,
        link: "/",
        icon: <DashboardSVG className="fill-dim-text dark:fill-dim-text-dark" />,
        activeIcon: <DashboardSVG className="fill-primary-green" />,
        subitems: [],
        sublinks: [],
    },
    {
        id:2,
        name: 'Launchpad',
        extendable: true,
        icon: <LaunchpadSVG className="fill-dim-text dark:fill-dim-text-dark" />,
        activeIcon: <LaunchpadSVG className="fill-primary-green" />,
        subitems: [
            {
                id:1,
                name: 'Locked Assets',
                link: '/launchpad',
            },
            {  
                id:2,
                name: 'Token Locker',
                link: '/launchpad/token-locker',
            },
            {
                id:3,
                name: 'LP Locker',
                link: '/launchpad/lp-locker',
            },
        ],
        sublinks: ["", "/launchpad/token-locker", "/launchpad/lp-locker"]
    },
    {
        id:3,
        name: 'Locker',
        extendable: true,
        icon: <SheildSecuritySVG className="fill-dim-text dark:fill-dim-text-dark" />,
        activeIcon: <SheildSecuritySVG className="fill-primary-green" />,
        subitems: [
            {
                id:1,
                name: 'Locked Assets',
                link: '/',
            },
            {  
                id:2,
                name: 'Token Locker',
                link: '/locker/token-locker',
            },
            {
                id:3,
                name: 'LP Locker',
                link: '/locker/lp-locker',
            },
        ],
        sublinks: ["/", "/locker/token-locker", "/locker/lp-locker"]
    },
    {
        id:4,
        name: 'Airdropper',
        extendable: true,
        icon: <AirplaneSVG className="fill-dim-text dark:fill-dim-text-dark" />,
        activeIcon: <AirplaneSVG className="fill-primary-green" />,
        subitems: [
            {
                id:1,
                name: 'Locked Assets',
                link: '/launchpad',
            },
            {  
                id:2,
                name: 'Token Locker',
                link: '/launchpad/token-locker',
            },
            {
                id:3,
                name: 'LP Locker',
                link: '/launchpad/lp-locker',
            },
        ],
        sublinks: ["", "/launchpad/token-locker", "/launchpad/lp-locker"]
    },
    {
        id:5,
        name: 'More Products',
        extendable: true,
        icon: <MoreProductsSVG className="fill-dim-text dark:fill-dim-text-dark" />,
        activeIcon: <MoreProductsSVG className="fill-primary-green" />,
        subitems: [
            {
                id:1,
                name: 'Locked Assets',
                link: '/launchpad',
            },
            {  
                id:2,
                name: 'Token Locker',
                link: '/launchpad/token-locker',
            },
            {
                id:3,
                name: 'LP Locker',
                link: '/launchpad/lp-locker',
            },
        ],
        sublinks: ["", "/launchpad/token-locker", "/launchpad/lp-locker"]
    }
]
