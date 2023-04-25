import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { toggleFollow } from "redux/operations";
import { Button } from "components/Button/Button";
import {
  Card,
  Avatar,
  Info,
  StyledText,
  ImageContainer,
} from "./TweetCard.styled";

function TweetCard({ user }) {
  const dispatcher = useDispatch();

  const handleFollowClick = () => {
    dispatcher(
      toggleFollow({
        ...user,
        isFollowing: !user.isFollowing,
        followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
      })
    );
  };

  return (
    <Card>
      <ImageContainer>
        <Avatar src={user.avatar} alt={user.name} />
      </ImageContainer>

      <Info>
        <StyledText>
          <NumericFormat
            value={user.tweets}
            displayType={"text"}
            thousandSeparator={true}
          />{" "}
          tweets
        </StyledText>
        <StyledText>
          <NumericFormat
            value={user.followers}
            displayType={"text"}
            thousandSeparator={true}
          />{" "}
          followers
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
