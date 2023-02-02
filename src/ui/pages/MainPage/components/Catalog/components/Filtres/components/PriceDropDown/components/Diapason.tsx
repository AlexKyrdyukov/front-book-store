import React from 'react';
import Slider from '@mui/material/Slider';

const Diapason: React.FC = () => {
  const [value2, setValue2] = React.useState<number[]>([20, 37]);
  const minDistance = 10;

  function valuetext(value: number) {
    return `${value}°C`;
  }
  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      // eslint-disable-next-line no-useless-return
      return;
    }
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue as number[]);
    }
  };
  return (
    <Slider
      getAriaLabel={() => 'Minimum distance shift'}
      value={value2}
      onChange={handleChange2}
      // valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      disableSwap
    />
  );
};

export default Diapason;
