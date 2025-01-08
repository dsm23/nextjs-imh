import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";
import Anchor from ".";

describe("components", () => {
  describe("Anchor", () => {
    it("should render", () => {
      const { container } = render(<Anchor href="#">Hello, World!</Anchor>);

      expect(container.querySelector("a")).toBeInTheDocument();
    });
  });

  it("should render, polymorphic", () => {
    const { container } = render(
      <Anchor asChild>
        <button>Hello, World!</button>
      </Anchor>,
    );

    expect(container.querySelector("button")).toBeInTheDocument();
    expect(container.querySelector("a")).not.toBeInTheDocument();
  });
});
