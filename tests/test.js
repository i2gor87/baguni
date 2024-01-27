import { renderHook, act } from "@testing-library/react";
import { createBaguni, useBaguni } from "../src";
import "@testing-library/jest-dom";

describe("createBaguni", () => {
  test("should initialize with provided initial state", () => {
    const baguni = createBaguni(10);
    expect(baguni.get()).toBe(10);
  });

  test("should update state and notify reRender functions", () => {
    const baguni = createBaguni(0);
    const mockReRender = jest.fn();
    baguni.joinReRender(mockReRender);

    act(() => {
      baguni.set(5);
    });

    expect(baguni.get()).toBe(5);
    expect(mockReRender).toHaveBeenCalledTimes(1);
  });

  test("should not call reRender if state is unchanged", () => {
    const baguni = createBaguni("initial");
    const mockReRender = jest.fn();
    baguni.joinReRender(mockReRender);

    act(() => {
      baguni.set("initial");
    });

    expect(mockReRender).not.toHaveBeenCalled();
  });
});

describe("useBaguni", () => {
  test("should return the current state and a function to update it", () => {
    const baguni = createBaguni("initial");
    const { result } = renderHook(() => useBaguni(baguni));
    expect(result.current[0]).toBe("initial");
    expect(typeof result.current[1]).toBe("function");
  });
  test("should update the state when the setter function is called", () => {
    const baguni = createBaguni(0);
    const { result } = renderHook(() => useBaguni(baguni));
    act(() => {
      result.current[1](10); // setState(10)
    });
    expect(result.current[0]).toBe(10);
  });
});
