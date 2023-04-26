import { useRef, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSeletedUser } from "redux/selectors";
import { getUserById, toggleFollow } from "redux/operations";
import { NumericFormat } from "react-number-format";
import NotFound from "components/NotFound/NotFound";
import { Button } from "components/Button/Button";
import {
  ProfileInfo,
  StyledArrowIcon,
  StyledNavLink,
  Wrapper,
  ProfilePicture,
  ProfileName,
  ProfileUsername,
  ProfileStatItem,
  ProfileStats,
} from "./UserProfile.styled";

const UserProfile = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/");
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(selectSeletedUser);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id, user]);

  const handleFollowClick = () => {
    dispatch(
      toggleFollow({
        ...user,
        isFollowing: !user.isFollowing,
        followers: user.isFollowing ? user.followers - 1 : user.followers + 1,
      })
    );
  };

  return (
    <>
      <Wrapper>
        <StyledNavLink to={backLinkLocationRef.current}>
          <StyledArrowIcon />
        </StyledNavLink>
      </Wrapper>

      {user ? (
        <>
          <Wrapper>
            <ProfilePicture
              src={user?.avatar}
              alt={user?.name}
              width="128"
              height="128"
              loading="lazy"
              style={{ backgroundColor: "#ebebeb" }}
            />
            <ProfileInfo>
              <ProfileName>
                {user.name} {user.emoji}
              </ProfileName>
              <ProfileUsername>@{user?.username}</ProfileUsername>
              <ProfileUsername>{user.address}</ProfileUsername>
            </ProfileInfo>
            <ProfileStats>
              <ProfileStatItem>
                <NumericFormat
                  value={user.tweets}
                  displayType={"text"}
                  thousandSeparator={true}
                />
                {user.tweets === 1 ? " tweet" : " tweets"}
              </ProfileStatItem>
              <ProfileStatItem>
                <NumericFormat
                  value={user.followers}
                  displayType={"text"}
                  thousandSeparator={true}
                />{" "}
                {user.tweets === 1 ? "follower" : "followers"}
              </ProfileStatItem>
            </ProfileStats>
          </Wrapper>
          <Button
            text={user.isFollowing ? "Following" : "Follow"}
            onClick={handleFollowClick}
          ></Button>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default UserProfile;
