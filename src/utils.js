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
    CreditCardIcon,
    KeyIcon,
    UserCircleIcon,
    ViewGridAddIcon,
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
    { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
    { name: 'Account', href: '#', icon: CogIcon, current: false },
    { name: 'Password', href: '#', icon: KeyIcon, current: false },
    { name: 'Notifications', href: '#', icon: BellIcon, current: false },
    { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: true },
    { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
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


export const getUserInitials = user => `${user?.rep_first_name?.charAt(0)}
              ${user?.rep_last_name?.charAt(0)}`


export const months = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        uv: 3490,
        pv: 4300,
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
        visalre: 2000,
        kekre: 9800,
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