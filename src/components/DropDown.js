import { useDispatch, useSelector } from "react-redux";
import { setFilterValue } from "redux/filtersSlice";
import { selectFilter } from "redux/selectors";
import { filterOptions } from "../redux/contants";
import CreatableSelect from "react-select/creatable";

export const Dropdown = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = (filter) => {
    if (!filter) {
      dispatch(setFilterValue(filterOptions[0]));
      return;
    }
    dispatch(setFilterValue(filter));
  };

  const getLabel = (option) => {
    return window.innerWidth < 768 ? option.label : `Show ${option.label}`;
  };

  const getWidth = () => {
    return window.innerWidth < 768 ? "155px" : "200px";
  };

  return (
    <>
      <CreatableSelect
        id={filter.value}
        name={filter.label}
        defaultValue={filterOptions[0]}
        defaultChecked={true}
        options={filterOptions}
        getOptionLabel={getLabel}
        getOptionValue={(option) => option.value}
        onChange={(selectedOption) => {
          handleFilterChange(selectedOption);
        }}
        placeholder="Show..."
        isSearchable={true}
        clearValue={() => {
          dispatch(setFilterValue(filterOptions[0]));
        }}
        controlShouldRenderValue={true}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            width: getWidth(),
          }),
        }}
      />
    </>
  );
};
