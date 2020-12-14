// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import Timer from "../Timer/Timer";

describe("App", () => {
  let container;
  beforeEach(() => {
    container = shallow(<App />);
  });
  it("should render a <div />", () => {
    expect(container.find("div").length).toEqual(1);
  });
  it("should render Timer Component", () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  });
});
