import React from "react";
import { shallow } from "enzyme";
import SkeletonLoader from "./SkeletonLoader";

describe("SkeletonLoader", () => {
  it("renders correctly with loading state", () => {
    const data = [
      { id: 1, name: "test" },
      { id: 2, name: "example" },
    ];
    const wrapper = shallow(<SkeletonLoader data={data} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly without loading state", () => {
    const data = [
      { id: 1, name: "test" },
      { id: 2, name: "example" },
    ];
    const wrapper = shallow(<SkeletonLoader data={data} />);
    wrapper.setState({ loading: false });
    expect(wrapper).toMatchSnapshot();
  });
});
