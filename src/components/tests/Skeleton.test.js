import React from "react";
import { shallow } from "enzyme";
import Skeleton from "./Skeleton";

describe("Skeleton", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Skeleton>Test</Skeleton>);
    expect(wrapper).toMatchSnapshot();
  });
});
