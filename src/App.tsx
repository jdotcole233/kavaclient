import { RouterProvider } from "react-router-dom";
import Root from "./Root";
import router from "./router";

type Props = {};

function App({}: Props) {
  return (
    <Root>
      <RouterProvider router={router} />
    </Root>
  );
}

export default App;
