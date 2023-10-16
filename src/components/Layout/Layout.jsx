import {NavLink, Outlet} from 'react-router-dom'
const Layout = () => {
    return (
        <>        <StyledAppContainer>
<header>
  <nav>
    <StyledNavLink className="header-link" to="/">
      Home
    </StyledNavLink>
    <StyledNavLink className="header-link" to="/movies">
      Movies
    </StyledNavLink>
    <StyledNavLink className="header-link" to="/movies/:movieId">
    MovieDetails
    </StyledNavLink>
  </nav>
</header>
</StyledAppContainer>
<main >
    <Outlet/>
</main>
</>

    )
}
export default Layout;