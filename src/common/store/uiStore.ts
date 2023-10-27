import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  showOOC: boolean;
  setShowOOC: (showOOC: boolean) => void;
};

const OOC_ENABLED_KEY = "radius-ooc-enabled";

export const useUiStore = create<State>()(
  devtools(
    (set) => ({
      showOOC: localStorage.getItem(OOC_ENABLED_KEY) === "true",
      setShowOOC: (showOOC: boolean) => {
        localStorage.setItem(OOC_ENABLED_KEY, showOOC ? "true" : "false");
        set({ showOOC });
      },
    }),
    {
      name: "ui-storage",
    }
  )
);
