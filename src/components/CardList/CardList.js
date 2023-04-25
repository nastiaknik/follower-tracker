import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersByPage } from "../../redux/operations";
import {
  selectFilteredUsers,
  selectUsersCount,
  selectFilterValue,
  selectIsLoading,
} from "../../redux/selectors";
import Loader from "components/Skeleton";
import TweetCard from "../TweetCard/TweetCard";
import { Button } from "components/Button/Button";
import { List, Container } from "./CardList.styled";

function CardList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const totalUsersCount = useSelector(selectUsersCount);
  const filter = useSelector(selectFilterValue);
  const isLoading = useSelector(selectIsLoading);
  console.log(users.length, "/", totalUsersCount);

  const limit = window.innerWidth < 768 ? 3 : 6;

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchUsersByPage({ page: 1, limit }, controller.signal)).catch(
      (err) => {
        console.error(err);
      }
    );
    return () => controller.abort();
  }, [dispatch, filter, limit]);

  const handleLoadMore = () => {
    dispatch(fetchUsersByPage({ page: page + 1, limit }))
      .then((response) => {
        setPage(page + 1);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <List>
        {users?.map((user) => (
          <TweetCard key={user.id} user={user} />
        ))}
      </List>
      {isLoading && <Loader page="/cards" />}
      {users && totalUsersCount !== users?.length && (
        <Button
          text="Load more"
          onClick={handleLoadMore}
          disabled={totalUsersCount <= users?.length}
        />
      )}
    </Container>
  );
}

export default CardList;
