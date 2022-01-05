import Link from "next/link";
import Badge from "./Badge";

export default function ReceiptCard(props) {
  const { thumb, title, dificulty, portion, times } = props;
  return (
    <Link href={`/resep/detail`}>
      <div className="rounded overflow-hidden shadow-lg cursor-pointer">
        <img
          className="w-full"
          src={`${thumb}`}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl font-gray-700">
            {title.substring(0, 38)}...
          </div>
        </div>
        <div className="px-6 pb-2">
          <Badge jam={times} porsi={portion} kesulitan={dificulty} />
        </div>
      </div>
    </Link>
  );
}
