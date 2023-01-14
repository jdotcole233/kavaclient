import { RouterProvider } from "react-router-dom";
import Root from "./Root";
import router from "./router";

type Props = {};

function App(props: Props) {
  return (
    <Root>
      <RouterProvider router={router} />
    </Root>
  );
}

export default App;
