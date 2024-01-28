"use client";
import { APP_COUNTER } from "@/lib/variables";
import { useBaguni } from "baguni";

const CounterComponent = () => {
  const [appCounter] = useBaguni(APP_COUNTER);
  return (
    <div>
      <div className="text-lg"> Counter: {appCounter}</div>
    </div>
  );
};

export default CounterComponent;
