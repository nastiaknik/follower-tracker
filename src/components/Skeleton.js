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
                marginTop: "15px",
                marginLeft: "15px",
              }}
            />
            <Skeleton
              width={77.87}
              height={27.6}
              count={1}
              style={{ margin: "24px auto", textAlign: "center" }}
            />
            <Skeleton width={150} height={38} count={1} style={{}} />
          </BoxTweets>
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
        marginTop: "30px",
        justifyContent: "space-between",
        alignItems: "center",
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
        marginTop: "16px",
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
