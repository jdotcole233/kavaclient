import { classNames, showOfferDate, toMoney } from "../../../utils";
import PDF from "../../../assets/pdf-icon.png";
import { FetchOffers_fetchOffers_offers } from "../../../graphql/queries/__generated__/FetchOffers";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setSelectedOffer } from "../../../features/offers";

type OfferProps = {
  file: FetchOffers_fetchOffers_offers | null;
};

const Offer = ({ file }: OfferProps) => {
  const dispatch = useAppDispatch();
  const { selectedOffer } = useAppSelector((state) => state.offers);
  const active = file?.offersoffer_id === selectedOffer?.offersoffer_id;
  return (
    <li
      onClick={() =>
        dispatch(setSelectedOffer(file as FetchOffers_fetchOffers_offers))
      }
      key={file?.offersoffer_id}
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
          <img src={PDF} className="h-28 w-36" alt="" />
        </div>
        <div className="w-auto flex-1 items-start flex flex-col">
          <span className="font-semibold">
            Cedant: {file?.offer?.insurer?.insurer_company_name}
          </span>
          <span>Period: {showOfferDate(file?.offer_detail as any)}</span>
          <span>
            Insured: {file?.offer_detail?.insured_by}
            <span className="font-semibold">
              {file?.offer?.insurance_company_name}
            </span>
          </span>

          <span className="text-gray-600 font-thin">
            Policy Number : {"N/A"}
          </span>
          <span className="flex items-center">
            <span className="bg-green-200 my-1 mr-2 flex items-center justify-center text-green-500 rounded-full px-2 font-medium text-sm">
              {file?.offer_participant_percentage}%
            </span>
            <span>Share: {toMoney(file?.offer_amount)}</span>
          </span>
        </div>
        {/* <div className="w-20 flex"></div> */}
      </div>
    </li>
  );
};

export default Offer;
