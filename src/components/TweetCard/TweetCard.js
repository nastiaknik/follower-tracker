import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { toggleFollow } from "redux/operations";
import { useLocation } from "react-router-dom";
import { Button } from "components/Button/Button";
import {
  Card,
  Avatar,
  Info,
  StyledText,
  ImageContainer,
  StyledLink,
} from "./TweetCard.styled";

function TweetCard({ user }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleFollowClick = () => {
    dispatch(
      toggleFollow({
        ...user,
        isFollowing: !user.isFollowing,
        followers: user.followers + (user.isFollowing ? -1 : 1),
      })
    );
  };

  return (
    <Card>
      <ImageContainer>
        <StyledLink to={`/tweets/${user.id}`} state={{ from: location }}>
          <Avatar src={user.avatar} alt={user.name} />
        </StyledLink>
      </ImageContainer>

      <Info>
        <StyledText>
          <NumericFormat
            value={user.tweets}
            displayType={"text"}
            thousandSeparator={true}
          />
          {user.tweets === 1 ? " tweet" : " tweets"}
        </StyledText>
        <StyledText>
          <NumericFormat
            value={user.followers}
            displayType={"text"}
            thousandSeparator={true}
          />{" "}
          {user.tweets === 1 ? "follower" : "followers"}
        </StyledText>

        <Button
          text={user.isFollowing ? "Following" : "Follow"}
          onClick={handleFollowClick}
        ></Button>
      </Info>
    </Card>
  );
}

export default TweetCard;
