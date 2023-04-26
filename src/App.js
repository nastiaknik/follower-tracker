import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const Tweets = lazy(() => import("./pages/Tweets/Tweets"));
const UserProfile = lazy(() => import("./pages/UserProfile/UserProfile"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="tweets/:id" element={<UserProfile />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
