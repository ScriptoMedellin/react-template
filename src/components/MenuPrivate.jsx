import { privateRoutes } from "../config/routes"

const MenuPrivate = () => {
  return (
    <div>
      {
        privateRoutes.map((x, i) => <div key={i}>{ x.path }</div>)
      }
    </div>
  )
}

export default MenuPrivate