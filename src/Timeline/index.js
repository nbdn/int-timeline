// @flow
import React, { Component, Fragment } from 'react';
import './Timeline.css';

import TimelineRule from './components/TimelineRule';
import TimelineItemsGroup from './components/TimelineItemsGroup';
import TimelineGrid from './components/TimelineGrid';
import TimelineEngine from './engine';
import type { Trial, TimelineRuleData, ScrollConfig } from './types';

type Props = {
  trials: Array<Trial>,
  scrollConfig: ScrollConfig,
  startDate: string,
  refreshOnResize: boolean
};

type State = {
  error: string,
  timelineItemsGroups: Array<Object>,
  timelineReady: boolean,
  timelineRuleData: TimelineRuleData
};

class Timeline extends Component<Props, State> {
  static defaultProps = {
    scrollConfig: {
      breakpoint: 50,
      unitWidth: 200
    },
    startDate: '2000-01-01',
    refreshOnResize: true
  };

  state = {
    error: '',
    timelineItemsGroups: [],
    timelineReady: false,
    timelineRuleData: {
      monthCount: 0,
      unitWidth: 0,
      units: []
    }
  };

  timelineRef: any = {
    offsetWidth: 50
  };

  componentDidMount() {
    const { refreshOnResize, trials } = this.props;
    if (refreshOnResize) {
      window.addEventListener('resize', this.onResize.bind(this));
    }

    this.renderClinicalTrials(trials);
  }

  componentWillMount() {
    const { refreshOnResize } = this.props;
    if (refreshOnResize) {
      window.removeEventListener('resize', this.renderClinicalTrials);
    }
  }

  componentWillReceiveProps({ trials }: Props) {
    this.renderClinicalTrials(trials);
  }

  onResize = () => {
    const { trials } = this.props;
    this.renderClinicalTrials(trials);
  };

  renderClinicalTrials(trials: Array<Trial>) {
    const { scrollConfig, startDate } = this.props;
    try {
      const {
        getTimelineRuleData,
        getGroupedCollapsingTrials
      } = TimelineEngine(
        trials,
        scrollConfig,
        startDate,
        this.timelineRef.offsetWidth
      );
      const timelineItemsGroups = getGroupedCollapsingTrials();
      const timelineRuleData = getTimelineRuleData();

      this.setState({
        timelineRuleData,
        timelineItemsGroups,
        timelineReady: true,
        error: ''
      });
    } catch (e) {
      this.setState({ error: e, timelineReady: false });
    }
  }

  render() {
    const {
      error,
      timelineItemsGroups,
      timelineReady,
      timelineRuleData
    } = this.state;

    return (
      <div ref={ref => (this.timelineRef = ref)} className="Timeline">
        {error && (
          <div className="TimelineError">
            <p>{error.toString()}</p>
          </div>
        )}
        {timelineReady && (
          <Fragment>
            <div className="TimelineItemsGroupsWrapper" key={'timeline_items'}>
              <TimelineGrid
                units={timelineRuleData.units}
                unitWidth={timelineRuleData.unitWidth}
              />
              {timelineItemsGroups.map(({ items, start, end }, iGroup) => {
                return (
                  <TimelineItemsGroup
                    key={`timeine_items_group_${iGroup}`}
                    items={items}
                    groupStart={start}
                    groupEnd={end}
                    unitWidth={timelineRuleData.unitWidth / 12}
                  />
                );
              })}
            </div>
            <TimelineRule
              units={timelineRuleData.units}
              unitWidth={timelineRuleData.unitWidth}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default Timeline;
