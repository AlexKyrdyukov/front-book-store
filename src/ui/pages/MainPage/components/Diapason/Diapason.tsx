import React from 'react';
import Slider from '@mui/material/Slider';

import StyledDiapason from './Diapason.style';

type PropsType = {
  handlePrice: (minValue: number, maxValue: number) => void;
  min: number | string;
  max: number | string;
};

const Diapason: React.FC<PropsType> = (props) => {
  const [value, setValue] = React.useState<number[]>([+props.min, +props.max]);
  const minDistance = 10;
  React.useEffect(() => {
    setValue([+props.min, +props.max]);
  }, [props.min, props.max]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, (clamped + minDistance)]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([(clamped - minDistance), clamped]);
      }
    } else {
      setValue(newValue as number[]);
    }
  };
  return (
    <StyledDiapason>
      <div
        onMouseUp={() => props.handlePrice(
          value[0] * 20,
          value[1] * 20,
        )}
      >
        <Slider
          getAriaLabel={() => 'Minimum distance shift'}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="sort-price__block">
        <span>$ {(value[0] * 20).toFixed(2)}</span>
        <span>$ {(value[1] * 20).toFixed(2)}</span>
      </div>
      <button
        onClick={() => props.handlePrice(0, 2000)}
      >without price filtres
      </button>
    </StyledDiapason>
  );
};

export default Diapason;
