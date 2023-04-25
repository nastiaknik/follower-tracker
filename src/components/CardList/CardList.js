import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers, fetchUsersByPage } from "../../redux/operations";
import { selectUsers, selectUsersCount } from "../../redux/selectors";
import TweetCard from "../TweetCard/TweetCard";
import { Button } from "components/Button/Button";
import { List, Container } from "./CardList.styled";

function CardList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const totalUsersCount = useSelector(selectUsersCount);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchAllUsers(controller.signal)).catch((err) => {
      console.error(err);
    });
    return () => controller.abort();
  }, [dispatch, page]);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchUsersByPage({ page: 1, limit: 6 }, controller.signal))
      .then((response) => {
        if (response.length === 0) {
          console.log("No users found");
        }
      })
      .catch((err) => {
        console.error(err);
      });
    return () => controller.abort();
  }, [dispatch]);

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
