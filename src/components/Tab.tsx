import React from "react";
import { TabEnum } from "../interfaces";
import { classNames } from "../utils";

const tabs: TabEnum[] = [TabEnum.CAST, TabEnum.REVIEW];

const Tab: React.FC<{
  activeTab: TabEnum;
  onChange: (tab: TabEnum) => void;
}> = ({ activeTab, onChange }) => {
  return (
    <div className="flex justify-start items-center text-white font-medium mt-6">
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            onClick={() => {
              onChange(tab);
            }}
            className={classNames(
              tab === activeTab ? "border-b-2 border-b-amber-400" : "",
              "sm:w-auto capitalize w-full flex justify-center items-center py-3 px-8"
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;
