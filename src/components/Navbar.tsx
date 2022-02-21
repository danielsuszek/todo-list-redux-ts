import './navbar.sass'

import CreateNewList from "./CreateNewList"
import Lists from "./Lists"


const Navbar = () => {
  return (
    <div className="navbar">
      <CreateNewList />
      <Lists />
    </div>
  )
}

export default Navbar