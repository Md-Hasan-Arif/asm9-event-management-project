import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivateRout = ({ children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return  children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRout;
PrivateRout.propTypes = {
    children: PropTypes.node
}