// Next UI Components
import { Spinner } from "@nextui-org/react";

const Loader = () => {
  return (
    <div className="w-full p-[5rem] flex items-center justify-center">
      <Spinner
        classNames={{
            wrapper: "w-[6rem] h-[6rem]",
          base: "",
          circle1: ""
            // svg: "w-36 h-36 drop-shadow-md",
        //   indicator: "stroke-white",
        //   track: "stroke-white/10",
        //   value: "text-3xl font-semibold text-white",
        }}
        color="default"
        size="lg"
      />
    </div>
  );
};

export default Loader;
