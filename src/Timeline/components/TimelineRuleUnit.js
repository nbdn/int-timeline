// @flow
import React from 'react';

type Props = {
  iUnit: number,
  unit: number | string,
  unitWidth: number
};

const TimelineRuleUnit = (props: Props) => {
  const { iUnit, unit, unitWidth } = props;
  return (
    <div
      key={`unit_${iUnit}`}
      className="TimelineRule__Item"
      style={{ width: unitWidth }}
    >
      <span>{unit}</span>
    </div>
  );
};

TimelineRuleUnit.defaultProps = {
  iUnit: 0,
  unit: '2000',
  unitWidth: 0
};

export default TimelineRuleUnit;
