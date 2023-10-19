interface IUpcomingClass {
  time: string;
  semester: string;
  subject: string;
}
export default function UpcomingClass({
  time,
  semester,
  subject,
}: IUpcomingClass) {
  return (
    <div className="flex items-center my-8">
      <div className="relative rounded-2xl py-3 w-14 -rotate-90">
        <div
          className="absolute -inset-px bg-gradient-to-r from-purple-700 to-orange-700 rounded-2xl"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-0 bg-[#070718] rounded-2xl p-px flex justify-center items-center"
          aria-hidden="true"
        >
          <div className="!z-10 text-gradient">{time}</div>
        </div>
      </div>
      <div className="top-2">
        <div className="text-[0.7rem] text-gray-500">{semester}</div>
        <div>{subject}</div>
      </div>
    </div>
  );
}
