import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Forbidden from "../pages/Forbidden/Forbidden";
import { RootState } from "../store/store";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
  //FILL HERE 3.6

  const { index } = useParams<{ index: string }>();
  const [isAccessAllowed, setIsAccessAllowed] = useState(false);
  const floorReducer = useSelector((state: RootState) => state.floorAccess.floorAccess);

  useEffect(() => {
    if (!index){
      return
    }
    const indexInt = parseInt(index);
    if (floorReducer[indexInt]) {
      setIsAccessAllowed(true);
    }
  }, [index, floorReducer]);

  return isAccessAllowed ? component : <Forbidden />;
};

export default PrivateRoute;
