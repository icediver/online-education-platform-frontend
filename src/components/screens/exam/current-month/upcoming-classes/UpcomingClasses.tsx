import UpcomingClass from "./upcoming-class/UpcomingClass";

interface IUpcomingClasses {}
export default function UpcomingClasses({}: IUpcomingClasses) {
  return (
    <div className="transparent-panel row-span-2 h-[calc(100%_-_255px)] border-gray-900 border mt-6 p-4">
      <div className="my-4 text-sm">Upcoming Classes</div>
      <div className="flex justify-between">
        <span className="font-thin">19 October</span>
        <span>...</span>
      </div>
      <div className="border-b border-gray-800">
        <UpcomingClass
          time="09:00"
          semester="GDM 2nd semester"
          subject="One-line Drawing Method"
        />
        <UpcomingClass
          time="12:00"
          semester="GDM 2nd semester"
          subject="One-line Drawing Method"
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <span className="font-thin">20 October</span>
          <button>...</button>
        </div>

        <UpcomingClass
          time="09:00"
          semester="GDM 2nd semester"
          subject="One-line Drawing Method"
        />
        <UpcomingClass
          time="12:00"
          semester="GDM 2nd semester"
          subject="One-line Drawing Method"
        />
      </div>
    </div>
  );
}
