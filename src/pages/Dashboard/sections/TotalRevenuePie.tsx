import {
  BadgeDelta,
  Card,
  DonutChart,
  Flex,
  Toggle,
  ToggleItem,
  Bold,
  Divider,
  List,
  ListItem,
  Text,
  Title,
} from "@tremor/react";

import {
  ChartPieIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { stocks } from "../../../utils";

export const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function TotalRevenuePie() {
  const [selectedView, setSelectedView] = useState("chart");
  return (
    <div className=" h-auto mt-4">
      <Card maxWidth="max-w-md">
        <Flex
          spaceX="space-x-8"
          justifyContent="justify-between"
          alignItems="items-center"
        >
          <Title>Total Revenue Per Class of Bus.</Title>
          <Toggle
            defaultValue="chart"
            color="gray"
            handleSelect={(value) => setSelectedView(value)}
          >
            <ToggleItem value="chart" icon={ChartPieIcon} />
            <ToggleItem value="list" icon={Bars3Icon} />
          </Toggle>
        </Flex>
        <Divider />
        <Text marginTop="mt-8">
          <Bold>Asset Allocation</Bold>
        </Text>
        <Text>1 Asset class • 5 Holdings</Text>
        {selectedView === "chart" ? (
          <DonutChart
            data={stocks}
            showAnimation={false}
            category="value"
            dataKey="name"
            valueFormatter={valueFormatter}
            marginTop="mt-6"
          />
        ) : (
          <>
            <Flex marginTop="mt-8" justifyContent="justify-between">
              <Text truncate={true}>
                <Bold>Stocks</Bold>
              </Text>
              <Text>Since transaction</Text>
            </Flex>
            <List marginTop="mt-4">
              {stocks.map((stock) => (
                <ListItem key={stock.name}>
                  <Text>{stock.name}</Text>
                  <Flex justifyContent="justify-end" spaceX="space-x-2">
                    <Text>
                      $ {Intl.NumberFormat("us").format(stock.value).toString()}
                    </Text>
                    <BadgeDelta
                      deltaType={stock.deltaType}
                      text={stock.performance}
                      size="xs"
                    />
                  </Flex>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Card>
    </div>
  );
}
