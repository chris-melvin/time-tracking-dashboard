import Image from "next/image";
export default function Tracker({ data, timeframe }) {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="h-40 overflow-hidden rounded-lg relative">
          <div
            style={{ backgroundColor: `${item.color}` }}
            className=" w-full flex justify-end"
          >
            <div className="-translate-y-2 -translate-x-4">
              <Image src={item.image} alt={item.title} width={50} height={50} />
            </div>
          </div>
          <div className="bg-darkBlue h-full p-4 rounded-lg top-7 absolute w-full">
            <div className="flex justify-between align-center mb-4 ">
              <h2 className="text-white text-tiny font-medium">{item.title}</h2>
              <div className="-translate-y-2 scale-90">
                <Image
                  src="/icon-ellipsis.svg"
                  alt="Ellipsis"
                  width={12}
                  height={3}
                />
              </div>
            </div>
            <div className="flex justify-between sm:block">
              <h2 className="text-white text-4xl font-light">
                {item.timeframes[timeframe].current}hrs
              </h2>
              <p className="text-gray-400 text-tiny mt-2">
                Last Week - {item.timeframes[timeframe].previous}hrs
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
