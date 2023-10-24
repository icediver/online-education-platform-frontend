interface ITableHeader {}
export default function TableHeader({}: ITableHeader) {
  return (
    <ul className="transparent-panel p-6 -mt-20 mb-4 grid grid-cols-8 gap-4 text-xs">
      <li className="col-span-2">STUDENT NAME</li>
      <li className="">ID NUMBER</li>
      <li className="col-span-2">EMAIL</li>
      <li>SEMESTER</li>
      <li className="col-span-2 text-end">DEPARTMENT</li>
    </ul>
  );
}
