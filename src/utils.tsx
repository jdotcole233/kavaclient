import {
  CogIcon,
  HomeIcon,
  FolderIcon,
  // PhotographIcon,
  // UserGroupIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";
import { Buffer } from "buffer";

import { UserCircleIcon } from "@heroicons/react/20/solid";
import { Sector } from "recharts";
import _ from "lodash";
import { BrokerTypes } from "./graphql/__generated__/globalTypes";
import { DeltaType } from "@tremor/react";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const generateURlData = (data: any) => {
  return Buffer.from(JSON.stringify(data)).toString("base64");
};

export const extractRegNumber = (details: any) => {
  const _ = details.find((el: any) => el.keydetail === "Vehicle Reg No");
  return _.value;
};

export const navigation = [
  { name: "Home", href: "/app/", icon: HomeIcon, current: false },
  {
    name: "All Offers",
    href: "/app/offers",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "All Treaties",
    href: "/app/treaties",
    icon: FolderIcon,
    current: false,
  },
  // { name: 'Brokers', href: '/brokers', icon: UserGroupIcon, current: false },
  // { name: 'Albums', href: '#', icon: PhotographIcon, current: false },
  { name: "Settings", href: "/app/settings", icon: CogIcon, current: false },
];

export const userNavigation = [
  { name: "Your profile", href: "/app/settings" },
  { name: "Sign out", href: "#" },
];

export const tabs = [
  { name: "Visal Reinsurance Brokers", href: BrokerTypes.VISAL, current: true },
  { name: "KEK Reinsurance Brokers", href: BrokerTypes.KEK, current: false },
  {
    name: "iRisk Reinsurance Brokers",
    href: BrokerTypes.IRISK,
    current: false,
  },
];
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
  },
];

export const plans = [
  {
    name: "Startup",
    priceMonthly: 29,
    priceYearly: 290,
    limit: "Up to 5 active job postings",
  },
  {
    name: "Business",
    priceMonthly: 99,
    priceYearly: 990,
    limit: "Up to 25 active job postings",
  },
  {
    name: "Enterprise",
    priceMonthly: 249,
    priceYearly: 2490,
    limit: "Unlimited active job postings",
  },
];
export const payments = [
  {
    id: 1,
    date: "1/1/2020",
    datetime: "2020-01-01",
    description: "Business Plan - Annual Billing",
    amount: "CA$109.00",
    href: "#",
  },
  // More payments...
];

export const subNavigation = [
  {
    name: "Profile",
    href: "/app/settings/",
    icon: UserCircleIcon,
    current: false,
  },
  {
    name: "Account",
    href: "/app/settings/account",
    icon: CogIcon,
    current: false,
  },
  // { name: 'Password', href: '#', icon: KeyIcon, current: false },
  {
    name: "Activities",
    href: "/app/settings/activities",
    icon: BookmarkIcon,
    current: false,
  },
];

export const toMoney = (value: any) => {
  return value
    ? parseFloat(value ?? "0.0").toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })
    : "0.00";
};

export const showOfferDate = (offer: Record<string, any>) => {
  const from = new Date(offer?.period_of_insurance_from);
  const to = new Date(offer?.period_of_insurance_to);
  return `${from.getDate()}/${
    from.getMonth() + 1
  }/${from.getFullYear()} to ${to.getDate()}/${
    to.getMonth() + 1
  }/${to.getFullYear()}`;
};

export const TIP = "___tken";

export const getUserInitials = (user: Record<string, any>) =>
  !_.isEmpty(user)
    ? `${user?.rep_first_name?.charAt(0)}${user?.rep_last_name?.charAt(0)}`
    : "NA";

export const months = [
  {
    name: "Jan",
    visalre: 4000,
    kekre: 2400,
    iriskre: 300,
    amt: 2400,
  },
  {
    name: "Feb",
    visalre: 3000,
    kekre: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    visalre: 2000,
    kekre: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    visalre: 2780,
    kekre: 3908,
    amt: 2000,
  },
  {
    name: "May",
    visalre: 1890,
    kekre: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    visalre: 2390,
    kekre: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    visalre: 3490,
    kekre: 4300,
    amt: 2100,
  },
];

export const years = [
  {
    name: "2019",
    visalre: 3000,
    kekre: 1398,
    iriskre: 2451,
    amt: 2210,
  },
  {
    name: "2020",
    visalre: 250,
    kekre: 1463,
    iriskre: 6532,
    amt: 2290,
  },
  {
    name: "2021",
    visalre: 2780,
    kekre: 3908,
    iriskre: 2544,
    amt: 2000,
  },
];

export const monthsWithCurrency = [
  {
    id: 1,
    month: "January",
    usd: 40231,
    eur: 64921,
    gbp: 20376,
    ghc: 33537,
  },
  {
    id: 2,
    month: "February",
    usd: 57300,
    eur: 22648,
    gbp: 23424,
    ghc: 3932,
  },
  {
    id: 3,
    month: "March",
    usd: 58768,
    eur: 58057,
    gbp: 62028,
    ghc: 48898,
  },
  {
    id: 4,
    month: "April",
    usd: 38400,
    eur: 51964,
    gbp: 40360,
    ghc: 25964,
  },
  {
    id: 5,
    month: "May",
    usd: 18090,
    eur: 28186,
    gbp: 65879,
    ghc: 18545,
  },
  {
    id: 6,
    month: "June",
    usd: 56350,
    eur: 66036,
    gbp: 60366,
    ghc: 1951,
  },
  {
    id: 7,
    month: "July",
    usd: 32793,
    eur: 9608,
    gbp: 51290,
    ghc: 16665,
  },
  {
    id: 8,
    month: "August",
    usd: 12769,
    eur: 48723,
    gbp: 67265,
    ghc: 28026,
  },
  {
    id: 9,
    month: "September",
    usd: 26475,
    eur: 42488,
    gbp: 2586,
    ghc: 12197,
  },
  {
    id: 10,
    month: "October",
    usd: 17874,
    eur: 5021,
    gbp: 4607,
    ghc: 43007,
  },
  {
    id: 11,
    month: "November",
    usd: 23262,
    eur: 49599,
    gbp: 67663,
    ghc: 34900,
  },
  {
    id: 12,
    month: "December",
    usd: 21586,
    eur: 58631,
    gbp: 67824,
    ghc: 33406,
  },
];

export const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    // value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        <span className="truncate"> {payload.name} </span>
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={payload.fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >
        {" "}
        {`${payload.name}`}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

interface StockData {
  name: string;
  value: number;
  performance: string;
  deltaType: DeltaType;
}

export const stocks: StockData[] = [
  {
    name: "Off Running AG",
    value: 10456,
    performance: "6.1%",
    deltaType: "increase",
  },
  {
    name: "Not Normal Inc.",
    value: 5789,
    performance: "1.2%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Logibling Inc.",
    value: 4367,
    performance: "2.3%",
    deltaType: "moderateIncrease",
  },
  {
    name: "Raindrop Inc.",
    value: 3421,
    performance: "0.5%",
    deltaType: "moderateDecrease",
  },
  {
    name: "Mwatch Group",
    value: 1432,
    performance: "3.4%",
    deltaType: "decrease",
  },
];
