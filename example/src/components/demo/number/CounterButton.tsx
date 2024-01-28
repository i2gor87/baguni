"use client";

import { Button } from "@/components/ui/button";
import { APP_COUNTER } from "@/lib/variables";
import { useBaguni } from "baguni";

const CounterButton = () => {
  const [appCounter, setAppCounter] = useBaguni(APP_COUNTER);
  return (
    <Button
      className="border-input rounded-lg border p-2"
      onClick={() => {
        setAppCounter(appCounter + 1);
      }}
    >
      Add 1 to counter
    </Button>
  );
};

export default CounterButton;
