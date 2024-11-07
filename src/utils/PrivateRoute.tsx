import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Forbidden from "../pages/Forbidden/Forbidden";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
  //FILL HERE 3.6

  const { floor } = useParams<{ floor: string }>();
  const [isAccessAllowed, setIsAccessAllowed] = useState(false);
  const floorReducer = useSelector((state: any) => state.floor);

  useEffect(() => {
    const index = parseInt(floor!);
    if (floorReducer[index]) {
      setIsAccessAllowed(true);
    }
  }, [floor, floorReducer]);

  return isAccessAllowed ? component : <Forbidden />;
};

export default PrivateRoute;
