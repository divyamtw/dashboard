import React from "react";

const ThemeToggle = ({checked, onChange}) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            {/* Hidden checkbox */}
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only peer"
            />

            {/* Track */}
            <div
                className="
          w-25 h-12.5
          rounded-full
          bg-[#28292c]
          border-[3px] border-[#28292c]
          transition-colors duration-300
          peer-checked:bg-[#d8dbe0]
        "
            />

            {/* Knob */}
            <span
                className="
          absolute left-2.5 top-2.5
          w-6.25 h-6.25
          rounded-full
          bg-[#28292c]
          shadow-[inset_12px_-4px_0px_0px_#d8dbe0]
          transition-all duration-300
          peer-checked:translate-x-12.5
          peer-checked:shadow-none
        "
            />
        </label>
    );
};

export default ThemeToggle;
