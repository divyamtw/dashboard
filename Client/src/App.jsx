import router from "./app.routes.jsx";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./features/auth/services/auth.api";
import Loader from "./shared/components/Loader";

const App = () => {
  const dispatch = useDispatch();
  const { isInitialized } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (!isInitialized) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-background">
        <Loader size="lg" />
      </div>
    );
  }

  return <RouterProvider router={router} />;
};

export default App;
