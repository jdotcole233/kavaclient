import EmptyImg from "../assets/empty.png";
type Props = {
  message?: string;
};

const EmptyPlaceholder = ({ message = "Nothing was found" }: Props) => {
  return (
    <div className="bg-white p-3 h-full flex flex-col items-center justify-center">
      <img className=" w-full h-36 object-contain" alt="" src={EmptyImg} />
      <h3 className="text-gray-400 font-medium text-xl">{message}</h3>
    </div>
  );
};

export default EmptyPlaceholder;
