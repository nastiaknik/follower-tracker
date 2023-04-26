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
  selectIsLoading,
} from "redux/selectors";
import TweetCard from "components/TweetCard/TweetCard";
import Loader from "components/Skeleton";
import { Container, CardList, StyledNavLink } from "./Home.styled";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const mostActiveUser = useSelector(selectUserWithMostTweets);
  const mostPopularUser = useSelector(selectUserWithMostFollowers);
  const isLoading = useSelector(selectIsLoading);

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
    <>
      {users && (
        <Container>
          <h2
            style={{
              fontSize: "24px",
              textAlign: "center",
              padding: 0,
              margin: "30px auto 10px",
            }}
          >
            Check the most popular and active users:{" "}
          </h2>
          <CardList>
            {mostPopularUser && <TweetCard user={mostPopularUser} />}
            {mostActiveUser && <TweetCard user={mostActiveUser} />}
          </CardList>
          <StyledNavLink to="/tweets">Go to tweets</StyledNavLink>
        </Container>
      )}

      {isLoading && !users && <Loader page="/" />}
    </>
  );
};

export default Home;
