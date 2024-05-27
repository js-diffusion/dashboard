import { Link } from "react-router-dom"
import { routes } from "@/router/routes"

export const Header = () => {
  return (
    <header>
      <nav>
        {routes.map(route => (
          <Link key={route.path} to={route.path}>{route.label}</Link>
        ))}
      </nav>
    </header>
  )
}