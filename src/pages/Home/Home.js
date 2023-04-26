import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserWithMostFollowers,
  getUserWithMostTweets,
  getAllUsers,
} from "redux/operations";
import {
  selectUserWithMostTweets,
  selectUserWithMostFollowers,
  selectAllUsers,
} from "redux/selectors";
import TweetCard from "components/TweetCard/TweetCard";
import { Container, CardList, StyledNavLink } from "./Home.styled";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const mostActiveUser = useSelector(selectUserWithMostTweets);
  const mostPopularUser = useSelector(selectUserWithMostFollowers);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(
      getAllUsers({
        signal: controller.signal,
      })
    ).catch((err) => {
      console.error(err);
    });
    return () => controller.abort();
  }, [dispatch, mostActiveUser, mostPopularUser]);

  useEffect(() => {
    dispatch(getUserWithMostFollowers(users));
    dispatch(getUserWithMostTweets(users));
  }, [dispatch, users]);

  return (
    <Container>
      <h2>Check the most popular and active users: </h2>
      {users && (
        <CardList>
          {mostPopularUser && <TweetCard user={mostPopularUser} />}
          {mostActiveUser && <TweetCard user={mostActiveUser} />}
        </CardList>
      )}
      <StyledNavLink to="/tweets">Go to tweets</StyledNavLink>
    </Container>
  );
};

export default Home;
