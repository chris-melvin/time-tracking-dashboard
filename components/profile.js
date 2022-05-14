import Image from "next/image";
export default function Profile({ timeframe, setTimeframe }) {
  return (
    <div className="row-span-2 col-span-1  bg-darkBlue text-white rounded-lg overflow-hidden">
      <div className="rounded-lg bg-primaryBlue p-4">
        <Image src="/image-jeremy.png" alt="Jeremy" width={50} height={50} />
        <p className="text-tiny text-gray-400 mt-6">Report for</p>
        <h2 className="text-3xl font-sans font-light">Jeremy Robson</h2>
      </div>
      <div className="p-4 ">
        <ul className="text-tiny space-y-3">
          <li
            className={timeframe === "daily" ? "text-white" : "text-gray-400"}
          >
            <button onClick={() => setTimeframe("daily")}>Daily</button>
          </li>
          <li
            className={timeframe === "weekly" ? "text-white" : "text-gray-500"}
          >
            <button onClick={() => setTimeframe("weekly")}>Weekly</button>
          </li>
          <li
            className={timeframe === "monthly" ? "text-white" : "text-gray-400"}
          >
            <button onClick={() => setTimeframe("monthly")}>Monthly</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
