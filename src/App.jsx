import { RouterProvider } from "react-router-dom";
import router from "./router";

import Footer from './components/Footer'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
