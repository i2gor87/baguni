import CounterButton from "@/components/demo/number/CounterButton";
import CounterButtonHighlight from "@/components/demo/number/CounterButtonHighlight";
import CounterComponent from "@/components/demo/number/CounterComponent";
import CounterComponentHighlight from "@/components/demo/number/CounterComponentHighlight";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex h-full flex-row items-center justify-center">
        <div className="flex flex-row justify-center gap-5">
          <div className="flex flex-col items-center justify-start">
            <CounterButtonHighlight />
            <CounterButton />
          </div>
          <div className="flex flex-col items-center justify-start">
            <CounterComponentHighlight />
            <CounterComponent />
          </div>
        </div>
      </div>
    </main>
  );
}
