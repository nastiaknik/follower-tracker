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
  selectUsers,
  selectIsLoading,
} from "redux/selectors";
import TweetCard from "components/TweetCard/TweetCard";
import Loader from "components/Skeleton";
import { Container, CardList, StyledNavLink } from "./Home.styled";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const mostActiveUser = useSelector(selectUserWithMostTweets);
  const mostPopularUser = useSelector(selectUserWithMostFollowers);
  const isLoading = useSelector(selectIsLoading);

  const active =
    JSON.parse(localStorage.getItem("mostActive")) || mostActiveUser;
  const popular =
    JSON.parse(localStorage.getItem("mostPopular")) || mostPopularUser;

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
    const controller = new AbortController();

    const savedUsers = JSON.parse(localStorage.getItem("users"));

    if (savedUsers) {
      dispatch(getUserWithMostFollowers(savedUsers));
      dispatch(getUserWithMostTweets(savedUsers));
    } else {
      dispatch(getAllUsers({ signal: controller.signal })).catch((err) => {
        console.error(err);
      });
      return () => controller.abort();
    }
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      localStorage.setItem("users", JSON.stringify(users));
    }
    if (mostActiveUser) {
      localStorage.setItem("mostActive", JSON.stringify(mostActiveUser));
    }
    if (mostPopularUser) {
      localStorage.setItem("mostPopular", JSON.stringify(mostPopularUser));
    }
  }, [users, mostActiveUser, mostPopularUser]);

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
            {popular && <TweetCard user={popular} />}
            {active && <TweetCard user={active} />}
          </CardList>
          <StyledNavLink to="/tweets">Go to tweets</StyledNavLink>
        </Container>
      )}

      {isLoading && !users && <Loader page="/" />}
    </>
  );
};

export default Home;
