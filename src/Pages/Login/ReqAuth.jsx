/*  
Author: Ashish Kumar Chaudhary
EmailId: 
Date: 23 Aug 2022
WorkItem: Created Private ReqAuth to re-route to login page if not authenticated
*/
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const ReqAuth = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((store) => store.authReducer.isAuth);
  if (!auth) {
    return <Navigate to={`/login`} state={{ from: location }} replace />;
  }
  return children;
};

export default ReqAuth;
