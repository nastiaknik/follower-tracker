import { useDispatch, useSelector } from "react-redux";
import { selectFilterValue } from "redux/selectors";
import { setFilterValue } from "redux/filtersSlice";
import { filterOptions } from "../redux/contants";
import Select from "react-select";

export const Dropdown = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);
  const handleFilterChange = (filter) => dispatch(setFilterValue(filter));

  console.log(filter);

  return (
    <Select
      defaultValue={filterOptions[0].value}
      name={filter}
      value={filter}
      options={filterOptions}
      onChange={(selectedOption) => handleFilterChange(selectedOption.value)}
      placeholder={filter}
      label={filter}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          width: "150px",
        }),
      }}
    />
  );
};
