// @flow
import React, { Fragment } from 'react';

import TimelineItemsLine from './TimelineItemsLine';
import TimelineItem from './TimelineItem';

type Props = {
  items: Array<Object>,
  unitWidth: number,
  groupStart: number,
  groupEnd: number
};

const TimelineItemsGroup = (props: Props) => {
  const { groupStart, groupEnd, items, unitWidth } = props;
  return (
    <div
      className="TimelineItemsGroup"
      style={{ left: groupStart * unitWidth }}
    >
      {renderItemsLines(items, unitWidth, groupStart, groupEnd)}
    </div>
  );
};

const renderItemsLines = (itemsLines, unitWidth, groupStart, groupEnd) => (
  <Fragment>
    {itemsLines.map((itemsLine, iLine) => (
      <TimelineItemsLine
        key={`timeline_line_${iLine}`}
        lineIndex={iLine}
        linesCount={itemsLines.length}
        start={groupStart}
        end={groupEnd}
        unitWidth={unitWidth}
      >
        {itemsLine.map(({ start, end, title }, iItem) => (
          <TimelineItem
            key={`timeline_item_${iItem}`}
            groupStart={groupStart}
            iItem={iItem}
            start={start}
            end={end}
            title={title}
            unitWidth={unitWidth}
          />
        ))}
      </TimelineItemsLine>
    ))}
  </Fragment>
);

export default TimelineItemsGroup;
