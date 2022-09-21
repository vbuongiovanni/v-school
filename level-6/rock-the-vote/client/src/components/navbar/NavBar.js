import { useContext } from "react";
import NavBtn from "./NavBtn";
import {useNavigate} from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AppContext } from "../../context/AppContext";

const NavBar = () => {
  const navigate = useNavigate();
  const {logout} = useContext(UserContext);
  const {navToAllIssues, navToUserIssues, navToNewIssues} = useContext(AppContext);

  return (
    <nav>
      <NavBtn btnTxt="My Posts" onClickCallback={navToUserIssues}/>
      <NavBtn btnTxt="All Posts" onClickCallback={navToAllIssues}/>
      <NavBtn btnTxt="Create New Issue" onClickCallback={navToNewIssues}/> 
      <NavBtn btnTxt="Log out" onClickCallback={logout}/>
    </nav>
  )
}
export default NavBar;