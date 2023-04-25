import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersByPage } from "../../redux/operations";
import {
  selectFilteredUsers,
  selectUsersCount,
  selectFilterValue,
} from "../../redux/selectors";
import TweetCard from "../TweetCard/TweetCard";
import { Button } from "components/Button/Button";
import { List, Container } from "./CardList.styled";

function CardList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const users = useSelector(selectFilteredUsers);
  const totalUsersCount = useSelector(selectUsersCount);
  const filter = useSelector(selectFilterValue);

  console.log(users.length, "/", totalUsersCount);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchUsersByPage({ page: 1, limit: 6 }, controller.signal)).catch(
      (err) => {
        console.error(err);
      }
    );
    return () => controller.abort();
  }, [dispatch, filter]);

  const handleLoadMore = () => {
    dispatch(fetchUsersByPage({ page: page + 1, limit: 6 }))
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
      {totalUsersCount !== users?.length && (
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
