// Next UI Components
import { Spinner } from "@nextui-org/react";

const Loader = () => {
  return (
    <div className="w-full p-10 flex items-center justify-center">
      <Spinner
        classNames={{
          wrapper: "w-[5rem] h-[5rem]",
          circle1: "border-b-gray-dark",
          circle2: "border-b-gray-dark",
        }}
        color="default"
        size="lg"
      />
    </div>
  );
};

export default Loader;
