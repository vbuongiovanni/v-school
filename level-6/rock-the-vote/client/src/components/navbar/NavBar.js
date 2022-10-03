import { useContext } from "react";
import NavBtn from "./NavBtn";
import {useLocation} from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { AppContext } from "../../context/AppContext";

const NavBar = () => {
  const {logout} = useContext(UserContext);
  const {navToAllIssues, navToUserIssues, navToNewIssues, useLocation} = useContext(AppContext);  
  const currentPath = useLocation().pathname.substring(0, 5);

  return (
    <nav>
      <div className="nav-text-container">
        <h1 className="header-title">Rock The Vote</h1>
      </div>
      <div className="nav-btn-container">
        <NavBtn isActive={currentPath === "/myis"} btnTxt="My Posts" onClickCallback={navToUserIssues}/>
        <NavBtn isActive={currentPath === "/issu"} btnTxt="All Posts" onClickCallback={navToAllIssues}/>
        <NavBtn isActive={currentPath === "/newi"} btnTxt="Create New Issue" onClickCallback={navToNewIssues}/> 
        <NavBtn isActive={false} btnTxt="Log out" onClickCallback={logout}/>
      </div>
    </nav>
  )
}
export default NavBar;