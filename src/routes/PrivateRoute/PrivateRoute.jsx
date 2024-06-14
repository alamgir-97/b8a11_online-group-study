import { Navigate } from "react-router";

const x = true;

const PrivateRoute = ( {children} )  => {

    if(x){return children  }
     return <Navigate to='/'> </Navigate>
    
    
    
};

export default PrivateRoute;