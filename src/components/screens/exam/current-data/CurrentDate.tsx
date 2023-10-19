import { hours } from "@/utils/date.utils";

interface ICurrentDate {
  selectedDate: Date;
}

export default function CurrentDate({ selectedDate }: ICurrentDate) {
  const today = selectedDate.toLocaleDateString("en-Us", {
    month: "long",
    day: "2-digit",
  });

  return (
    <div className="transparent-panel ">
      <div className="font-medium text-gradient text-center py-7 mb-3 border-b-[0.1rem] border-gray-500/30 ">
        {today}
      </div>
      {hours.map((hour) => (
        <div
          className="py-4 text-center text-[0.7rem] text-gray-400"
          key={hour.key}
        >
          {hour.key}
        </div>
      ))}
    </div>
  );
}
