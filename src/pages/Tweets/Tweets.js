import CardList from "components/CardList/CardList";
import { Dropdown } from "components/DropDown";
import {
  StyledArrowIcon,
  StyledNavLink,
  Title,
  Wrapper,
  InputWrapper,
} from "./Tweets.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredUsers } from "redux/operations";
import { selectFilter } from "redux/selectors";

const Tweets = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchFilteredUsers({ filter, signal: controller.signal })).catch(
      (err) => {
        console.error(err);
      }
    );
    return () => controller.abort();
  }, [dispatch, filter]);

  return (
    <>
      <Wrapper>
        <StyledNavLink to="/">
          <StyledArrowIcon />
        </StyledNavLink>
        <Title>Tweets</Title>
      </Wrapper>
      <InputWrapper>
        <Dropdown />
      </InputWrapper>
      <CardList></CardList>
    </>
  );
};

export default Tweets;
