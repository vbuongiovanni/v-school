const NavBtn = props => {
  const {btnTxt, onClickCallback, isActive} = props;

  const clickHandler = e => {
    onClickCallback();
  }

  return (
    <div onClick={clickHandler} className={`navtab clickable .btn color-btn${isActive ? " active-tab" : ""}`}>
      <h1 className="nav-btn-txt">{btnTxt}</h1>
    </div>
  )
}
export default NavBtn;