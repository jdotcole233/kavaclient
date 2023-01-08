import { classNames, showOfferDate, toMoney } from "../../../utils";
import PDF from "../../../assets/pdf-icon.png";
import { FetchOffers_fetchOffers_offers } from "../../../graphql/queries/__generated__/FetchOffers";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setSelectedOffer } from "../../../features/offers";
import { FetchTreaties_fetchTreaties_treaties } from "../../../graphql/queries/__generated__/FetchTreaties";
import { setSelectedTreaty } from "../../../features/treaty";

type TreatyItemProps = {
  file: FetchTreaties_fetchTreaties_treaties | null;
};

const TreatyItem = ({ file }: TreatyItemProps) => {
  const dispatch = useAppDispatch();
  const { selectedTreaty } = useAppSelector((state) => state.treaty);
  const active = file?.treaty_id === selectedTreaty?.treaty_id;
  return (
    <li
      onClick={() =>
        dispatch(
          setSelectedTreaty(file as FetchTreaties_fetchTreaties_treaties)
        )
      }
      key={file?.treaty_id}
      className="relative cursor-pointer"
    >
      <div
        className={classNames(
          active ? "bg-gray-200" : "bg-white",
          " focus:border-indigo-600  border shadow-md flex items-center p-3 space-x-3"
        )}
      >
        <div className="w-22">
          {/* <DocumentTextIcon className="h-11 w-11 text-green-600" /> */}
          <img src={PDF} className="h-28 w-28" alt="" />
        </div>
        <div className="w-auto flex-1 items-start flex flex-col">
          <span className="font-semibold">
            Cedant: {file?.insurance_company_name}
          </span>
          <span>Period: N/A</span>
          <span>
            {/* Insured: {file?.offer_detail?.insured_by}
            <span className="font-semibold">
              {file?.offer?.insurance_company_name}
            </span> */}
          </span>

          <span className="text-gray-600 font-thin">
            Policy Number : {"N/A"}
          </span>
          <span className="flex items-center">
            <span className="bg-green-200 my-1 mr-2 flex items-center justify-center text-green-500 rounded-full px-2 font-medium text-sm">
              {file?.treaty_participation_percentage}%
            </span>
            {/* <span>Share: {toMoney(file?.layer_limit?.)}</span> */}
          </span>
        </div>
        {/* <div className="w-20 flex"></div> */}
      </div>
    </li>
  );
};

export default TreatyItem;
