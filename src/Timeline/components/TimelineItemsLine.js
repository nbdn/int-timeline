// @flow
import React from 'react';

type Props = {
  children: any,
  start: number,
  end: number,
  unitWidth: number,
  lineIndex: number,
  linesCount: number
};

const TimelineItemsLine = (props: Props) => {
  const { children, start, end, unitWidth, lineIndex, linesCount } = props;
  return (
    <div
      className="TimelineItemsGroup__Line"
      key={`timeline_line_${lineIndex}`}
      style={{
        width: end * unitWidth - start * unitWidth,
        height: `${100 / linesCount}%`
      }}
    >
      {children}
    </div>
  );
};

TimelineItemsLine.defaultProps = {
  children: [],
  start: 0,
  end: 0,
  unitWidth: 0,
  lineIndex: 0,
  linesCount: 0
};

export default TimelineItemsLine;
