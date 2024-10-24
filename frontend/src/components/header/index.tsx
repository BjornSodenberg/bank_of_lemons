import Logo from "../../assets/logo"
import { AdminInfo } from "../admin"
import { Menu } from "../menu"

export const Header = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 40,
      paddingBottom: 60,
    }}>
      <Logo />
      <Menu />
      <AdminInfo />
    </div>
  )
}