import { Content } from "islandjs/runtime";
import { Layout as DefaultLayout } from "islandjs/theme";

function Layout() {
  return (
    <div>
      <Content />
    </div>
  );
}

const HomeLayout = () => <div />;
const NotFoundLayout = () => <div>404</div>;
const setup = () => {};

export { Layout, HomeLayout, NotFoundLayout, setup };
