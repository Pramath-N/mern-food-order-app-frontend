import { cuisineList } from "@/config/restaurants-options.config";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClicked: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClicked,
}: Props) => {
  const handleCuisineReset = () => {
    onChange([]);
  };
  const handleCuisinesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = e.target.value;
    const isChecked = e.target.checked;

    const newCuisinesList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisinesList);
  };

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="tetx-md font-semibold mb-2">Filter by cuisines</div>

        <div
          onClick={() => handleCuisineReset()}
          className="tetx-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset filters
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 7)
          .map((cuisineItem) => {
            const isSelected = selectedCuisines.includes(cuisineItem);
            return (
              <div className="flex">
                <input
                  id={`cuisine_${cuisineItem}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisineItem}
                  checked={isSelected}
                  onChange={handleCuisinesChange}
                />
                <label
                  htmlFor={`cuisine_${cuisineItem}`}
                  className={`flex flex-1 items-center cursor-pointer tetx-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisineItem}
                </label>
              </div>
            );
          })}

        <Button
          onClick={onExpandedClicked}
          variant="link"
          className="empty-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              Show less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">Show more <ChevronDown /></span>
          )}
        </Button>
      </div>
    </>
  );
};

export default CuisineFilter;
