const NavBtn = props => {
  const {btnTxt, onClickCallback} = props;

  const clickHandler = e => {
    onClickCallback();
  }

  return (
    <div onClick={clickHandler} className="nav-btn">
      <h1 className="nav-btn-txt">{btnTxt}</h1>
    </div>
  )
}
export default NavBtn;