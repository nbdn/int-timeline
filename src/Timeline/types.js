// @flow

export type Trial = {
  start: number,
  end: number,
  title: string
};

export type TrialGroup = {
  start: number,
  end: number,
  items: Array<Array<Trial>>
};

export type TimelineRuleData = {
  monthCount: number,
  unitWidth: number,
  units: Array<number>
};

export type ScrollConfig = {
  breakpoint: number,
  unitWidth: number
};

export type Props = {
  trials: Array<Trial>,
  scrollConfig: ScrollConfig,
  startDate: string,
  refreshOnResize: boolean
};
