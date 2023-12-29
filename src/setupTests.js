import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Text } from "./components/Text";

describe("Text component", () => {
  it("Renders normal text", () => {
    render(<Text />);
    const textElement = screen.getByText(
      "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."
    );
    expect(textElement).toBeInTheDocument();
  });

  it("Styles for texts are rendered correctly in small viewports", () => {
    global.innerWidth = 500;
    render(<Text />);
    const textElement = screen.getByText(
      "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."
    );
    expect(textElement).toHaveStyle(`
        color: var(--neutral-white-opacity-1);
    `);
  });

  it("Styles for texts are rendered correctly in bigger viewports", () => {
    global.innerWidth = 1920;
    render(<Text />);
    const textElement = screen.getByText(
      "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."
    );
    expect(textElement).toHaveStyle(`
        color: var(--neutral-white-opacity-1);
        max-width: 23.375rem;
    `);
  });
});

describe("Heading component", () => {
  it("Renders heading", () => {
    render(<Text />);
    const headingElement = screen.getByRole("heading", {
      name: /Get insights that help your business grow./i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it("Styles are appearing correctly", () => {
    render(<Text />);
    const headingElement = screen.getByRole("heading", {
      name: /Get insights that help your business grow./i,
    });
    expect(headingElement).toHaveStyle(`
        color: var(--neutral-white);
    `);
    const textElement = screen.getByText("insights");
    expect(textElement).toHaveStyle(`
        color: var(--accent-color);
    `);
  });
});
