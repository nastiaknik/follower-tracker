import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = ({ page }) => {
  const { id } = useParams();

  switch (page) {
    case "/":
      return (
        <>
          <Skeleton
            width={462}
            height={27.6}
            style={{ margin: "30px auto 30px" }}
          />
          <BoxCardList>
            <Skeleton
              width={380}
              height={460}
              style={{
                borderRadius: "20px",
                margin: 0,
                padding: 0,
                lineHeight: 1,
                display: window.innerWidth < 768 ? "block" : "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            />
            <Skeleton
              width={380}
              height={460}
              style={{
                borderRadius: "20px",
                margin: 0,
                padding: 0,
                lineHeight: 1,
                display: window.innerWidth < 768 ? "block" : "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            />
          </BoxCardList>
          <Skeleton
            count={1}
            width={268}
            height={52.4}
            borderRadius={10.31}
            style={{ margin: "0 auto 20px" }}
          />
        </>
      );

    case "/tweets":
      return (
        <>
          <BoxTweets margin="30px 0 15px">
            <Skeleton
              circle="true"
              width={35}
              height={35}
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "left",
                marginLeft: window.innerWidth < 768 ? "0" : "15px",
              }}
            />
            <BoxTitle>
              <Skeleton
                width={77.87}
                height={27.6}
                count={1}
                style={{
                  textAlign: "center",
                  display: "block",
                }}
              />
            </BoxTitle>
          </BoxTweets>
          <Skeleton
            width={window.innerWidth < 767 ? "155px" : "200px"}
            height={40}
            count={1}
            style={{
              marginLeft: "auto",
              display: "block",
              marginRight: window.innerWidth < 767 ? "20px" : "0",
            }}
            borderRadius={20}
          />
          <BoxCardList>
            <Skeleton
              width={380}
              height={460}
              style={{
                borderRadius: "20px",
                margin: 0,
                padding: 0,
                lineHeight: 1,
                display: window.innerWidth < 768 ? "block" : "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            />
            <Skeleton
              width={380}
              height={460}
              style={{
                borderRadius: "20px",
                margin: 0,
                padding: 0,
                lineHeight: 1,
                display: window.innerWidth < 768 ? "block" : "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            />
            <Skeleton
              width={380}
              height={460}
              style={{
                borderRadius: "20px",
                margin: 0,
                padding: 0,
                lineHeight: 1,
                display: window.innerWidth < 768 ? "block" : "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            />
            <Skeleton
              width={380}
              height={460}
              style={{
                borderRadius: "20px",
                margin: 0,
                padding: 0,
                lineHeight: 1,
                display: window.innerWidth < 768 ? "block" : "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            />
            <Skeleton
              width={380}
              height={460}
              style={{
                borderRadius: "20px",
                margin: 0,
                padding: 0,
                lineHeight: 1,
                display: window.innerWidth < 768 ? "block" : "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            />
            <Skeleton
              width={380}
              height={460}
              style={{
                borderRadius: "20px",
                margin: 0,
                padding: 0,
                lineHeight: 1,
                display: window.innerWidth < 768 ? "block" : "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            />
          </BoxCardList>
          <Skeleton
            width={240.583}
            height={52.383}
            style={{
              margin: "0 auto",
              borderRadius: "10.31px",
              marginBottom: "30px",
            }}
          />
        </>
      );

    case "/cards":
      return (
        <BoxCardList>
          <Skeleton
            width={380}
            height={460}
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              boxSizing: "border-box",
              borderRadius: "20px",
              margin: 0,
              padding: 0,
              lineHeight: 1,
            }}
          />
          <Skeleton
            width={380}
            height={460}
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              boxSizing: "border-box",
              borderRadius: "20px",
              margin: 0,
            }}
          />
          <Skeleton
            width={380}
            height={460}
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              boxSizing: "border-box",
              borderRadius: "20px",
              margin: 0,
            }}
          />
          <Skeleton
            width={380}
            height={460}
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              boxSizing: "border-box",
              borderRadius: "20px",
              margin: 0,
            }}
          />
          <Skeleton
            width={380}
            height={460}
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              boxSizing: "border-box",
              borderRadius: "20px",
              margin: 0,
            }}
          />
          <Skeleton
            width={380}
            height={460}
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              boxSizing: "border-box",
              borderRadius: "20px",
              margin: 0,
            }}
          />
        </BoxCardList>
      );

    case `/tweets/${id}`:
      return (
        <>
          <Skeleton
            circle="true"
            width={35}
            height={35}
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "left",
              marginLeft: window.innerWidth < 768 ? "0" : "15px",
              marginTop: "30px",
            }}
          />
          <BoxTweets margin="12px 0 0">
            <Skeleton
              borderRadius="50%"
              style={{ width: "128px", height: "128px", marginRight: "10px" }}
            />

            <BoxInfo>
              <Skeleton width={168} height={27.6} />
              <Skeleton width={111} height={23} style={{ margin: "8px 0" }} />
              <Skeleton width={50} height={23} />
            </BoxInfo>
            <BoxInfo>
              <Skeleton width={145} height={43} style={{ margin: "10px 0" }} />
              <Skeleton width={185} height={43} style={{ margin: "10px 0" }} />
            </BoxInfo>
          </BoxTweets>
          <Skeleton width={241.3} height={52.4} />
        </>
      );

    default:
      return (
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Skeleton
            width={548}
            height={372}
            count={1}
            style={{ marginBottom: 15 }}
          />
          <Skeleton count={1} width={268} height={52.4} />
        </div>
      );
  }
};

const BoxTweets = ({ margin, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        margin: window.innerWidth < 1199 ? "20px 20px 0" : margin,
      }}
    >
      {children}
    </div>
  );
};

const BoxCardList = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: "8px",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "baseline",
        gap: window.innerWidth > 767 ? "20px" : "8px",
        listStyle: "none",
        padding: 0,
        lineHeight: 1,
      }}
    >
      {children}
    </div>
  );
};

const BoxTitle = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: "8px",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "baseline",
        gap: "30px",
        listStyle: "none",
        padding: 0,
        lineHeight: 1,
      }}
    >
      {children}
    </div>
  );
};

const BoxInfo = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        marginRight: "10px",
        marginLeft: "10px",
      }}
    >
      {children}
    </div>
  );
};

Loader.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Loader;
