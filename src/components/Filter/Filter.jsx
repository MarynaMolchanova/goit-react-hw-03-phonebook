import PropTypes from 'prop-types';

import { Div, Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        id="filter"
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      ></Input>
    </Div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
