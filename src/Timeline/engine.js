// @flow

import type { ScrollConfig, Trial, TrialGroup } from './types';

const START_DATE_REGEX = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

/**
 * TimelineEngine Function Factory
 * @param {array} trials - the timeline items
 * @param {Object} scrollConfig - (optional) scroll configuration for the timeline
 * @param {string} startDateStr - the timeline start date string (yyyy-mm-dd)
 * @param {number} timelineWidth - the DOM timeline width
 * @returns {Object} TimelineEngine - object with getters timeline data getters
 */
function TimelineEngine(
  trials: Array<Trial>,
  scrollConfig: ScrollConfig,
  startDateStr: string,
  timelineWidth: number
) {
  const startDateStrRegex = new RegExp(START_DATE_REGEX);
  let timelineRuleData = {};
  let trialsGroups = [];

  // Init the engine
  const init = () => {
    ensureTrials();
    ensureValidScrollConfig();
    ensureStartDateStr();
    ensureTimelineWidth();
    buildTimeline();
  };

  // Ensure trials array is valid
  const ensureTrials = () => {
    if (!trials || !Array.isArray(trials) || !trials.length) {
      throw new Error('You must fill at least one trial.');
    }
  };

  // Ensure date string is valid
  const ensureStartDateStr = () => {
    if (!startDateStr || !startDateStrRegex.test(startDateStr)) {
      throw new Error(
        'You must fill a valid startDate string property with following the next format : yyyy-mm-dd.'
      );
    }
  };

  // Ensure timeline width is valid
  const ensureTimelineWidth = () => {
    if (!timelineWidth || isNaN(timelineWidth)) {
      throw new Error(
        'Error getting timeline ref width. Inspect Timeline render ref building.'
      );
    }
  };

  // Ensure trial item is valid
  const ensureValidTrial = (trial: Trial, iTrial: number) => {
    if (typeof trial !== 'object') {
      throw new Error(`Trial must be an object at index ${iTrial}`);
    } else if (isNaN(trial.end) || isNaN(trial.start)) {
      throw new Error(`Invalid trial end parameter at index ${iTrial}`);
    } else if (trial.end <= trial.start) {
      throw new Error(`Invalid trial end parameter at index ${iTrial}`);
    }
  };

  // Ensure scroll config is valid
  const ensureValidScrollConfig = () => {
    if (typeof scrollConfig !== 'object') {
      throw new Error('Scrollconfig must be an object');
    } else if (
      !scrollConfig ||
      isNaN(scrollConfig.breakpoint) ||
      isNaN(scrollConfig.unitWidth)
    ) {
      throw new Error('Invalid scrollConfig object parameter');
    }
  };

  // Build timeline data
  const buildTimeline = () => {
    timelineRuleData = computeTimelineRuleData();
    trialsGroups = groupCollapsingTrials();
  };

  // Return groups created by the engine
  const getGroupedCollapsingTrials = () => [...trialsGroups];

  // Return timeline rule data created by the engine
  const getTimelineRuleData = () => ({ ...timelineRuleData });

  // Add trial to a specific group. Define the line position item in the group
  const addTrialGroupItem = (
    group: TrialGroup,
    item: Trial,
    lineIndex: number
  ) => {
    const prevItem = group.items[lineIndex]
      ? group.items[lineIndex][group.items[lineIndex].length - 1]
      : null;

    // If no prev item: create new group line
    if (!prevItem) {
      group.items.push([item]);
    } else if (
      (item.start < prevItem.start && item.end < prevItem.start) ||
      item.start > prevItem.end
    ) {
      // Add item to group line
      group.items[lineIndex].push(item);
    } else {
      // Recursive check next line
      addTrialGroupItem(group, item, lineIndex + 1);
    }

    updateTrialGroupEdges(group, item);
  };

  // Update the group edges if needed (start / end)
  const updateTrialGroupEdges = (group, item: Trial) => {
    if (item.end > group.end) {
      group.end = item.end;
    }
    if (item.start < group.start) {
      group.start = item.start;
    }
  };

  // Create a new group with the first trial line
  const createTrialGroup = (trial: Trial) => ({
    items: [[trial]],
    start: trial.start,
    end: trial.end
  });

  // Group collapsing trials on the timeline
  const groupCollapsingTrials = () =>
    trials
      .sort((t1, t2) => t1.start - t2.start)
      .reduce((trialsGroups, trial, iTrial) => {
        ensureValidTrial(trial, iTrial);
        const correspondingGroup = trialsGroups.find(
          element => trial.start <= element.end
        );
        correspondingGroup
          ? addTrialGroupItem(correspondingGroup, trial, 0)
          : trialsGroups.push(createTrialGroup(trial));
        return trialsGroups;
      }, []);

  // Define the data to display one the timeline rule
  const computeTimelineRuleData = () => {
    const startDateObj = new Date(startDateStr);
    const endMonth = trials.sort((t1, t2) => t1.end - t2.end)[trials.length - 1]
      .end;
    const startYear = startDateObj.getFullYear();
    const endYear = new Date(
      startDateObj.setMonth(startDateObj.getMonth() + endMonth)
    ).getFullYear();

    const timelineRuleData = {};

    timelineRuleData.units = [];
    for (let i = startYear; i <= endYear; i++) {
      timelineRuleData.units.push(i);
    }

    timelineRuleData.monthCount = (endYear - startYear) * 12;
    timelineRuleData.unitWidth = parseInt(
      timelineWidth / timelineRuleData.units.length,
      10
    );

    if (timelineRuleData.unitWidth < scrollConfig.breakpoint) {
      timelineRuleData.unitWidth = scrollConfig.unitWidth;
    }

    return timelineRuleData;
  };

  // Init the engine
  init();

  // Return getters
  return {
    getGroupedCollapsingTrials,
    getTimelineRuleData
  };
}

export default TimelineEngine;
