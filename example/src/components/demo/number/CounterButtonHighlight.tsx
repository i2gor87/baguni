"use client";
import { useTheme } from "next-themes";
import { Highlight, themes } from "prism-react-renderer";

const CounterButtonHighlight = () => {
  const { theme } = useTheme();
  const codeBlock =
    '"use client";\nimport { APP_COUNTER } from "@/lib/variables";\nimport { useBaguni } from "baguni";\n\nconst CounterButton = () => {\n  const [appCounter, setAppCounter] = useBaguni(APP_COUNTER);\n  return (\n    <button onClick={() => {\n        setAppCounter(appCounter + 1);\n      }}>Add 1 to counter\n    </button>\n  );\n};\n  export default CounterButton;';
  return (
    <Highlight
      theme={theme === "dark" ? themes.duotoneDark : themes.github}
      code={codeBlock}
      language="tsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{ ...style, position: "relative" }}
          className="mb- mb-6 w-auto max-w-[650px] rounded-xl p-14"
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CounterButtonHighlight;
