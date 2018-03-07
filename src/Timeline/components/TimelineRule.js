// @flow
import React from 'react';

import TimelineRuleUnit from './TimelineRuleUnit';

type Props = {
  unitWidth: number,
  units: Array<number>
};

const TimelineRule = (props: Props) => (
  <div
    className="TimelineRule"
    style={{ width: props.unitWidth * props.units.length }}
  >
    {renderRuleUnits(props)}
  </div>
);

const renderRuleUnits = ({ unitWidth, units }) =>
  units.map((unit, iUnit) => {
    return (
      <TimelineRuleUnit
        key={`rule_unit_${iUnit}`}
        iUnit={iUnit}
        unit={unit}
        unitWidth={unitWidth}
      />
    );
  });

TimelineRule.defaultProps = {
  units: [],
  unitWidth: 0
};

export default TimelineRule;
