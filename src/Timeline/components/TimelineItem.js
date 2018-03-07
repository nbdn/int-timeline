// @flow
import React from 'react';

const ITEMS_COLORS = ['#FFD24C', '#612DC8', '#00D8C8'];

type Props = {
  unitWidth: number,
  groupStart: number,
  iItem: number,
  start: number,
  end: number,
  title: string
};

const TimelineItem = (props: Props) => {
  const { groupStart, iItem, start, end, title, unitWidth } = props;
  return (
    <div
      className="TimelineItem"
      key={`timeline_item_${iItem}`}
      style={{
        transform: `translateX(${start * unitWidth -
          groupStart * unitWidth}px)`,
        width: end * unitWidth - start * unitWidth
      }}
    >
      <div
        className="TimelineItem__content"
        style={{
          borderColor: `${ITEMS_COLORS[Math.floor(Math.random() * 3)]}`
        }}
      >
        <span>{title}</span>
      </div>
    </div>
  );
};

TimelineItem.defaultProps = {
  groupStart: 0,
  iItem: 0,
  start: 0,
  end: 0,
  title: '',
  unitWidth: 0
};

export default TimelineItem;
