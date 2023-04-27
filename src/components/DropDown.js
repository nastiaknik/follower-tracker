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

  return (
    <>
      <CreatableSelect
        id={filter.value}
        name={filter.label}
        defaultValue={filter}
        defaultChecked={true}
        options={filterOptions}
        getOptionLabel={(option) =>
          window.innerWidth < 768 ? option.label : `Show ${option.label}`
        }
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
          control: (baseStyles) => ({
            ...baseStyles,
            width: window.innerWidth < 768 ? "155px" : "200px",
            borderRadius: "25px",
            backgroundColor: "#fff",
            border: "2px solid #bcb5d2",
            "&:hover": {
              borderColor: "#7458b2",
            },
            "&:focus": {
              borderColor: "#7458b2",
            },
            "&:focus-within": {
              borderColor: "#7458b2",
              outline: "none",
            },
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
            borderRadius: "6px",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            overflow: "hidden",
            color: state.isSelected ? "#fff" : "#333",
            backgroundColor: state.isSelected ? "#56a68d" : "#fff",
            "&:hover": {
              backgroundColor: state.isSelected ? "#56a68d" : "#8cbfb9",
              color: "#fff",
            },
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            color: "#333",
            outline: "none",
          }),
        }}
      />
    </>
  );
};
