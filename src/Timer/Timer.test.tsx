import React from "react";
import { shallow, ShallowWrapper, mount } from "enzyme";
import Timer from "./Timer";

describe("Timer", () => {
  let container: ShallowWrapper<
    any,
    Readonly<{}>,
    React.Component<{}, {}, any>
  >;
  beforeEach(() => {
    container = shallow(<Timer />);
  });
  it("should render <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1);
  });
  it("should render instances of the TimerButton component", () => {
    expect(container.find("button").length).toEqual(3);
  });
});

describe("mounted Timer", () => {
  let container: {
    instance: () => {
      (): any;
      new (): any;
      forceUpdate: { (): void; new (): any };
      state: { (): any; new (): any; isOn: any; minutes: any; seconds: any };
    };
    find: (
      arg0: string
    ) => {
      (): any;
      new (): any;
      first: {
        (): {
          (): any;
          new (): any;
          simulate: { (arg0: string): void; new (): any };
        };
        new (): any;
      };
    };
  };

  beforeEach(() => (container = mount(<Timer />)));

  it("invokes startTimer when the start button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "startTimer");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".start-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("invokes stopTimer when the stop button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "stopTimer");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".stop-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("invokes resetTimer when the reset button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "resetTimer");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".reset-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it("should change isOn state true when the start button is clicked", () => {
    container.instance().forceUpdate();
    container.find(".start-timer").first().simulate("click");
    expect(container.instance().state.isOn).toEqual(true);
  });

  it("should change isOn state false when the stop button is clicked", () => {
    container.instance().forceUpdate();
    container.find(".stop-timer").first().simulate("click");
    expect(container.instance().state.isOn).toEqual(false);
  });

  it("should change isOn state false when the reset button is clicked", () => {
    container.instance().forceUpdate();
    container.find(".stop-timer").first().simulate("click");
    expect(container.instance().state.isOn).toEqual(false);
    expect(container.instance().state.minutes).toEqual(25);
    expect(container.instance().state.seconds).toEqual(0);
  });
});
