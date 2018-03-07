// @flow
import React from 'react';

type Props = {
  unitWidth: number,
  units: Array<number>
};

const TimelineGrid = (props: Props) => {
  const { units, unitWidth } = props;
  return (
    <div className="TimelineGrid">
      {units.map((unit, iUnit) => {
        return (
          <div
            className="TimelineGrid__Line"
            key={`grid_${iUnit}`}
            style={{ left: `${iUnit * unitWidth}px` }}
          />
        );
      })}
    </div>
  );
};

TimelineGrid.defaultProps = {
  units: [],
  unitWidth: 0
};

export default TimelineGrid;
