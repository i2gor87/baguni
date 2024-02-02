"use client";
import { useTheme } from "next-themes";
import { Highlight, themes } from "prism-react-renderer";

const CounterComponentHighlight = () => {
  const { theme } = useTheme();
  const codeBlock =
    '"use client";\nimport { APP_COUNTER } from "@/lib/variables";\nimport { useBaguni } from "baguni";\n\nconst CounterComponent = () => {\n  const [appCounter] = useBaguni(APP_COUNTER);\n  return (\n    <div>\n       <div> Counter: {appCounter}</div>\n    </div>\n  );\n};\n    \nexport default CounterComponent;';
  return (
    <Highlight
      theme={
        theme === "dark" || theme === undefined
          ? themes.duotoneDark
          : themes.github
      }
      code={codeBlock}
      language="tsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{ ...style, position: "relative" }}
          className="mb- mb-6 w-auto max-w-[600px] rounded-xl p-14"
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

export default CounterComponentHighlight;
