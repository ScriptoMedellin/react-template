import { publicRoutes } from "../config/routes"

const MenuPublic = () => {
  return (
    <div>
      {
        publicRoutes.map((x, i) =>
        <div key={i}>{ x.path }</div>
        )
      }
    </div>
  )
}

export default MenuPublic