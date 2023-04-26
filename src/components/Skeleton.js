import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loader = ({ page }) => {
  switch (page) {
    case "/":
      return <div style={{ marginLeft: "32px" }}></div>;

    case "/tweets":
      return (
        <>
          <BoxTweets>
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
          <Skeleton count={1} width={130} height={42} />
        </div>
      );
  }
};

const BoxTweets = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center",
        margin: window.innerWidth < 1199 ? "20px 20px 0" : "30px 0 10px",
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
        gap: window.innerWidth > 767 ? "30px" : "8px",
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

Loader.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Loader;
