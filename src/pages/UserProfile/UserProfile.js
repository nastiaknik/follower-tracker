import { useRef, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSeletedUser /* , selectIsLoading */ } from "redux/selectors";
import { getUserById, toggleFollow } from "redux/operations";
import { NumericFormat } from "react-number-format";
/* import Loader from "components/Skeleton"; */
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
  /* const isLoading = useSelector(selectIsLoading); */

  console.log(id);
  console.log(user);

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
      {/* {isLoading && <Loader page={`/user/${id}`} />} */}
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
        <p>Sorry, we didn't find the {user?.name}</p>
      )}
    </>
  );
};

export default UserProfile;
