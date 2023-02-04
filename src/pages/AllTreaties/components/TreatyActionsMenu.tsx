import { Fragment, useState } from "react";
import { Menu } from "@mantine/core";
import DocumentWrapper from "../../../components/document-wrapper";
import { urls } from "../../../constants";
import { BrokerTypes } from "../../../graphql/__generated__/globalTypes";
import { generateURlData } from "../../../utils";
import { useAppSelector } from "../../../app/hooks";
import { FetchTreaties_fetchTreaties_treaties } from "../../../graphql/queries/__generated__/FetchTreaties";
import _ from "lodash";

type Props = {
  treaty: FetchTreaties_fetchTreaties_treaties | null;
};

const TreatyActionsMenu = ({ treaty }: Props) => {
  const { broker } = useAppSelector((state) => state.offers);
  const [openCreditNote, setOpenCreditNote] = useState(false);
  return (
    <Fragment>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          {/* <Button>Toggle menu</Button> */}
          <button
            type="button"
            className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Actions
          </button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Actions</Menu.Label>
          <Menu.Item
            onClick={() => setOpenCreditNote(true)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          >
            View Closing Slip
          </Menu.Item>
          <Menu.Item
            // onClick={() => setOpenPayments(true)}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            }
          >
            View Payments
          </Menu.Item>
          {/* <Menu.Item
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          >
            Issue Guarantee Note
          </Menu.Item> */}
        </Menu.Dropdown>
      </Menu>

      <DocumentWrapper
        show={openCreditNote}
        setShow={setOpenCreditNote}
        url={`${
          urls[broker || BrokerTypes.KEK]
        }/treatyCreditNotes/${generateURlData(
          treaty?.treaty_type === "PROPORTIONAL"
            ? {
                participant_id: treaty?.participant_id,
                treaty_account_id: treaty?.treaty_account_id,
                type: 0,
                emp_id: "",
                broker: broker,
                treaty_type: "PROPORTIONAL",
              }
            : {
                participant_id: treaty?.participant_id,
                limit: _.last(treaty?.layer_limit)?.limit,
                layer: treaty?.layer_limit?.length,
                uuid: _.last(treaty?.layer_limit)?.uuid,
                m_and_d_premium: _.last(treaty?.layer_limit)?.m_and_d_premium,
                total_participation_percentage:
                  treaty?.total_participation_percentage,
                installment_type: _.last(treaty?.layer_limit)?.installment_type,
                broker: broker,
                treaty_type: "NONPROPORTIONAL",
              }
        )}`}
      />
    </Fragment>
  );
};

export default TreatyActionsMenu;
