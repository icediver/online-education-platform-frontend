import { BsChevronRight } from "react-icons/bs";
import ArtTools from "./art-tools/ArtTools";
import TypographyTools from "./typography-tools/TypographyTools";

interface IWeekFooter {}
export default function ExamFooter({}: IWeekFooter) {
  return (
    <div className="col-span-6">
      <div className="mb-4">Exam Syllabus</div>

      <div className="transparent-panel h-24 border-gray-900 border flex py-5 ">
        <div className="flex w-1/2 px-10 items-center justify-between border-r border-gray-800">
          <div className="flex">
            <div className="bg-gradient-to-r from-purple-700 to-orange-700 h-12 w-12 rounded-full flex justify-center items-center">
              <ArtTools fill="white" />
            </div>
            <div className="ml-10">
              <div>Basic Design</div>
              <div className="text-[0.6rem] text-gray-500 mt-1 ">
                Introduction to Graphic Design
              </div>
            </div>
          </div>
          <button>
            <BsChevronRight />
          </button>
        </div>
        <div className="flex w-1/2 px-10 items-center justify-between">
          <div className="flex">
            <div className="bg-gradient-to-r from-purple-700 to-orange-700 h-12 w-12 rounded-full flex justify-center items-center">
              <TypographyTools />
            </div>
            <div className="ml-10">
              <div>Typography</div>
              <div className="text-[0.6rem] text-gray-500 mt-1 ">
                Introduction to Graphic Design
              </div>
            </div>
          </div>
          <button>
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
