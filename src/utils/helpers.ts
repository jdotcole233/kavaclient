import _ from "lodash";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case "CANCELLED":
    case "DELIVERY FAILED":
      return "red";
    case "COMPLETED":
    case "DELIVERED":
    case "PAYOUT READY":
    case "PICKED UP":
      return "green";
    case "PENDING":
    case "AWAITING CUSTOMER CONFIRMATION":
      return "yellow";
    case "PROCESSING":
    case "ORDER PACKED":
    case "CUSTOMER CONFIRMED":
      return "blue";
    case "OUT FOR DELIVERY":
      return "sky";
    default:
      return "gray";
  }
};

const createColumns = (arr: any[], names: string[]) => {
  const obj: any = {};
  arr.forEach((el, id) => {
    obj[names[id]] = el;
  });
  return obj;
};

export const generateCombinationsColumns = (
  variations: any[],
  combinations: any[]
): any[] => {
  const columnNames = variations.map((el) => el.variation_name);
  const _combinations = combinations.map((el) =>
    createColumns(el, columnNames)
  );
  return _combinations;
};

export const randomSKUGen = (sku?: string): string => {
  return sku
    ? `${sku}-${Math.floor(Math.random() * 90000) + 10000}`
    : `${Math.floor(Math.random() * 90000) + 10000}`;
};

export function cartesian(...args: any[]) {
  var r: any[] = [],
    max = args.length - 1;
  function helper(arr: any[], i: number) {
    for (var j = 0, l = args[i]?.length; j < l; j++) {
      var a = arr.slice(0); // clone arr
      a?.push(args[i][j]);
      if (i === max) r.push(a);
      else helper(a, i + 1);
    }
  }
  helper([], 0);
  return r;
}

const orderStatus = [
  "pending",
  "supplier notified",
  "reseller confirmed",
  "awaiting customer confirmation",
  "customer confirmed",
  "hub pickup",
  "order packed",
  "picked up",
  "out for delivery",
  "delivered",
  "payout ready",
  "supplier unreachable",
  "customer unreachable",
  "out of stock",
  "rescheduled",
  "rejected on delivery",
  "returned after delivery",
  "delivery failed",
  "cancelled",
];

export const TendoOrderStatus = orderStatus.map((status) =>
  status.toUpperCase()
);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const processUserGraphData = (data: (Record<string, any> | null)[]) => {
  const firstData = _.groupBy(data, "month");
  const monthlyData = months.map((el, idx) => {
    const data = _.get(firstData, idx + 1);
    return {
      name: el,
      GH: _.find(data, { country: "GH" })?.total ?? 0,
      NG: _.find(data, { country: "NG" })?.total ?? 0,
      ZA: _.find(data, { country: "ZA" })?.total ?? 0,
    };
  });
  // const itemsToReturn = [];
  // console.log(firstData);
  // for (const [key, value] of Object.entries(firstData)) {
  //   // console.log(key, value);
  //   const item = {
  //     name: key,
  //     GH: _.find(value, { country: "GH" })?.total ?? 0,
  //     NG: _.find(value, { country: "NG" })?.total ?? 0,
  //   };
  //   itemsToReturn.push(item);
  // }

  // console.log(itemsToReturn);

  return monthlyData;
};
