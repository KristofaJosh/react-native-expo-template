import { render, screen, userEvent } from "@testing-library/react-native";

import Button from "@/components/button";

// It is recommended to use userEvent with fake timers
// Some events involve duration, so your tests may take a long time to run.
// jest.useFakeTimers();

describe("<Button />", () => {
  test("should render correctly", async () => {
    const expected = "Click me";

    const tree = render(<Button text={expected} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  test("given a callback function; should render correctly", async () => {
    const expected = "Hello";

    const onSubmit = jest.fn();

    const { getByText } = render(<Button text={expected} onPress={onSubmit} />);
    const button = getByText(expected);

    const user = userEvent.setup();
    await user.press(screen.getByRole("text", { name: "Hello" }));

    expect(button).toHaveTextContent(expected);
    expect(onSubmit).toHaveBeenCalled();
  });
});
