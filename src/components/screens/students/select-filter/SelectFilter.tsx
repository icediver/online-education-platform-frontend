import clsx from "clsx";
import { ChangeEvent } from "react";
import { FiFilter } from "react-icons/fi";
import Select, { ActionMeta, SingleValue } from "react-select";
interface ISelectFilter {
  selectDepartmentHandler: (department: string) => void;
}
interface ISortedOption {
  value: string;
  label: string;
}
const options: ISortedOption[] = [
  { value: "Graphics Design", label: "Graphics Design" },
  { value: "Typography", label: "Typography" },
];
export default function SelectFilter({
  selectDepartmentHandler,
}: ISelectFilter) {
  function changeSelectHandler(
    newValue: SingleValue<ISortedOption>,
    actionMeta: ActionMeta<ISortedOption>,
  ) {
    if (newValue) selectDepartmentHandler(newValue?.value);
    if (newValue === null) selectDepartmentHandler("");
  }
  return (
    <div className="absolute left-1/2 -top-[6.5rem] translate-x-20 ml-px z-10 !text-white text-xs">
      <div className="relative">
        <Select
          options={options}
          onChange={changeSelectHandler}
          isClearable
          classNames={{
            control: ({ isFocused, menuIsOpen }) =>
              clsx(
                "w-48 !select-panel pl-8 !text-white !rounded-md",

                isFocused
                  ? "!shadow-none !border !border-solid !border-black "
                  : "!border !border-transparent !text-white",
                menuIsOpen && "!rounded-b-none",
              ),
            indicatorSeparator: () => "hidden",
            input: () => "!text-white",
            singleValue: () => "!text-gray-400",
            menu: (menuIsOpen) =>
              clsx(
                "!select-panel !overflow-hidden !mt-0 !p-0 rounded-md ",
                menuIsOpen && "!rounded-t-none",
              ),

            menuList: () => {
              return "!p-0 ";
            },
            option: ({ isFocused, isSelected, isDisabled }) =>
              clsx(
                isFocused && "!bg-primary/30 !text-white ",
                isSelected && !isFocused && "!bg-white/10 !text-white/50",
                // isSelected && isFocused && '!bg-secondary !text-white'
              ),
          }}
        />
        <FiFilter className="absolute text-sm left-3 text-gray-300 top-3" />
      </div>
    </div>
  );
}
