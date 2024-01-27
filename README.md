# 🧺 Baguni

Baguni is a Korean word for 'basket' and it's also the name of this most simple and lightweight package for managing state across React components.

Baguni's primary goal is to simplify the use of state in React, traditionally managed by the `useState` hook. While `useState` is limited to the scope of a single component, `useBaguni` breaks these boundaries, allowing developers to share the state of a single variable across multiple components seamlessly.

If you need more complex state management, preserving state and/or use utilities/extensions, you may need something like [Zustand](https://github.com/pmndrs/zustand) or [Jotai](https://github.com/pmndrs/jotai), but before making a decision, you may want to read [why sections](#why-use-baguni-if-i-can-use-library-name) first

## Features

- **Simple and Lightweight**: Designed as drop-in replacement for `useState` in React.
- **State Sharing**: Effortlessly share state between components.
- **React Friendly**: Works out of the box with existing React/Nextjs applications.
- **No Boilerplate**: Reduce the need for complex state management setups.
- **No learning curve**: If you know `useState`, you know `useBaguni`.
- **Typescript ready**: Use it with javascript or typescript as you want.
- **Smallest state management library**: 1601 bytes (1173 without declaration file)

## Why use Baguni if I can use `library-name`

- Simple
- Lightweight
- Easy to set up
- No need to learn syntax or API - you may just replace your existing `useState` with `useBaguni`

## Size comparison

- Install size: <a href="https://pkg-size.dev/baguni"><img src="https://pkg-size.dev/badge/install/342104" title="Install size for baguni"></a>
- Bundle size: <a href="https://pkg-size.dev/baguni"><img src="https://pkg-size.dev/badge/bundle/7935" title="Bundle size for baguni"></a>
- index.js: 1173 bytes
- index.d.ts: 428 bytes

## Standalone versions

If you don't want to install the package, you may just copy `standalone/baguni-standalone.js/.ts` to your project and use it as you like.

## Installation

```bash
npm install baguni
```

## Usage

### Create your very first app-scoped variable

```typescript
import { createBaguni } from "baguni";
export const APP_COUNTER = createBaguni<number>(0);
```

### Use it anywhere

```typescript
import { useBaguni } from "baguni";
import { APP_COUNTER } from "./lib/variables";

const Component = () => {
  const [appCounter] = useBaguni(APP_COUNTER);
  return <div>{appCounter}</div>;
};

export default Component;
```

### Modify state from anywhere

```typescript
import { useBaguni } from "baguni";
import { APP_COUNTER } from "./lib/variables";

const Button = () => {
  const [counter, setAppCounter] = useBaguni(APP_COUNTER);
  return (
    <button
      onClick={() = {
        setAppCounter(counter + 1);
      }}
    >Add 1 to counter</button>
  );
};

export default Button;
```

## Variability

Any state you can create via `useState`, can be created via `useBaguni`

```typescript
export const simpleString = createBaguni<string>("");
export const simpleNumber = createBaguni<number>(0);
export const simpleMap = createBaguni<[]>([]);
```

## Contributions

Contributions are welcome! Feel free to open a pull request or an issue to discuss potential changes or improvements.

## License

MIT License, 2024
