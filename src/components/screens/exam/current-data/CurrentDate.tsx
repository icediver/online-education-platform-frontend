interface ICurrentDate {}
const hours = [
  "09:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "01:00 pm",
  "02:00 pm",
  "03:00 pm",
  "04:00 pm",
  "05:00 pm",
  "06:00 pm",
];

export default function CurrentDate({}: ICurrentDate) {
  const today = new Date().toLocaleDateString("en-Us", {
    month: "long",
    day: "2-digit",
  });

  return (
    <div className="transparent-panel px-3">
      <div className="font-semibold text-gradient text-center py-8 border-b-[0.1rem] border-gray-500/30">
        {today}
      </div>
      {hours.map((hour) => (
        <div className="py-4 text-center text-[0.7rem]" key={hour}>
          {hour}
        </div>
      ))}
    </div>
  );
}
