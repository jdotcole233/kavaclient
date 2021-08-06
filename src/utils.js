import {
    CogIcon,
    CollectionIcon,
    HomeIcon,
    // PhotographIcon,
    // UserGroupIcon,
    ViewGridIcon as ViewGridIconOutline,
} from '@heroicons/react/outline'

import {
    BellIcon,
    UserCircleIcon,
} from '@heroicons/react/outline'


export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export const navigation = [
    { name: 'Home', href: '/app', icon: HomeIcon, current: false },
    { name: 'All Offers', href: '/app/offers', icon: ViewGridIconOutline, current: false },
    { name: 'All Treaties', href: '/app/treaties', icon: CollectionIcon, current: false },
    // { name: 'Brokers', href: '/brokers', icon: UserGroupIcon, current: false },
    // { name: 'Albums', href: '#', icon: PhotographIcon, current: false },
    { name: 'Settings', href: '/app/settings', icon: CogIcon, current: false },
]

export const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]

export const tabs = [
    { name: 'Visal Reinsurance Brokers', href: 'visalre', current: true },
    { name: 'KEK Reinsurance Brokers', href: 'kekre', current: false },
    { name: 'iRisk Reinsurance Brokers', href: 'iriskre', current: false },
]
export const files = [
    {
        "Policy Number": "KEK-56348983",
        Currency: "GHC",
        Created: "June 8, 2020",
        Reinsured: "Kwame Owusu",
        Brokerage: "12.3%",
        Commission: "6.3%",
        NIC: "2.5%",
        "WIthholding tax": "3.1%",
    },
    {
        "Policy Number": "KEK-76348983",
        Currency: "USD",
        Created: "May 2, 2020",
        Reinsured: "Vanguard Life",
        Brokerage: "25.2%",
        Commission: "6.3%",
        NIC: "4.2%",
        "WIthholding tax": "3.1%",
    }
]

export const plans = [
    { name: 'Startup', priceMonthly: 29, priceYearly: 290, limit: 'Up to 5 active job postings' },
    { name: 'Business', priceMonthly: 99, priceYearly: 990, limit: 'Up to 25 active job postings' },
    { name: 'Enterprise', priceMonthly: 249, priceYearly: 2490, limit: 'Unlimited active job postings' },
]
export const payments = [
    {
        id: 1,
        date: '1/1/2020',
        datetime: '2020-01-01',
        description: 'Business Plan - Annual Billing',
        amount: 'CA$109.00',
        href: '#',
    },
    // More payments...
]

export const subNavigation = [
    { name: 'Profile', href: '/app/settings/', icon: UserCircleIcon, current: false },
    { name: 'Account', href: '/app/settings/account', icon: CogIcon, current: false },
    // { name: 'Password', href: '#', icon: KeyIcon, current: false },
    { name: 'Notifications', href: '/app/settings/notifications', icon: BellIcon, current: false },
]

export const toMoney = (value) => {
    return value ? parseFloat(value ?? "0.0").toLocaleString(undefined, { maximumFractionDigits: 2 }) : "0.00"
}

export const showOfferDate = (offer) => {
    const from = new Date(offer?.period_of_insurance_from)
    const to = new Date(offer?.period_of_insurance_to)
    return `${from.getDate()}/${from.getMonth() + 1}/${from.getFullYear()} to ${to.getDate()}/${to.getMonth() + 1}/${to.getFullYear()}`
}

export const TIP = "___tken"


export const getUserInitials = user => `${user?.rep_first_name?.charAt(0)}${user?.rep_last_name?.charAt(0)}`


export const months = [
    {
        name: 'Jan',
        visalre: 4000,
        kekre: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        visalre: 3000,
        kekre: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        visalre: 2000,
        kekre: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        visalre: 2780,
        kekre: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        visalre: 1890,
        kekre: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        visalre: 2390,
        kekre: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        visalre: 3490,
        kekre: 4300,
        amt: 2100,
    },
];


export const years = [

    {
        name: '2019',
        visalre: 3000,
        kekre: 1398,
        iriskre: 2451,
        amt: 2210,
    },
    {
        name: '2020',
        visalre: 250,
        kekre: 1463,
        iriskre: 6532,
        amt: 2290,
    },
    {
        name: '2021',
        visalre: 2780,
        kekre: 3908,
        iriskre: 2544,
        amt: 2000,
    },

];

export const monthsWithCurrency = [{
    "id": 1,
    "month": "Jan",
    "usd": 40231,
    "eur": 64921,
    "gbp": 20376,
    "ghc": 33537
}, {
    "id": 2,
    "month": "Frb",
    "usd": 57300,
    "eur": 22648,
    "gbp": 23424,
    "ghc": 3932
}, {
    "id": 3,
    "month": "Mar",
    "usd": 58768,
    "eur": 58057,
    "gbp": 62028,
    "ghc": 48898
}, {
    "id": 4,
    "month": "Apr",
    "usd": 38400,
    "eur": 51964,
    "gbp": 40360,
    "ghc": 25964
}, {
    "id": 5,
    "month": "May",
    "usd": 18090,
    "eur": 28186,
    "gbp": 65879,
    "ghc": 18545
}, {
    "id": 6,
    "month": "Jun",
    "usd": 56350,
    "eur": 66036,
    "gbp": 60366,
    "ghc": 1951
}, {
    "id": 7,
    "month": "Jul",
    "usd": 32793,
    "eur": 9608,
    "gbp": 51290,
    "ghc": 16665
}, {
    "id": 8,
    "month": "Aug",
    "usd": 12769,
    "eur": 48723,
    "gbp": 67265,
    "ghc": 28026
}, {
    "id": 9,
    "month": "Sep",
    "usd": 26475,
    "eur": 42488,
    "gbp": 2586,
    "ghc": 12197
}, {
    "id": 10,
    "month": "Oct",
    "usd": 17874,
    "eur": 5021,
    "gbp": 4607,
    "ghc": 43007
}, {
    "id": 11,
    "month": "Nov",
    "usd": 23262,
    "eur": 49599,
    "gbp": 67663,
    "ghc": 34900
}, {
    "id": 12,
    "month": "Dec",
    "usd": 21586,
    "eur": 58631,
    "gbp": 67824,
    "ghc": 33406
}]