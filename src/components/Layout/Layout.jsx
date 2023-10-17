import { StyledAppContainer, StyledNavLink } from 'components/Layout/Layout.styled';
import { Suspense } from 'react';
import { Outlet} from 'react-router-dom'
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
  </nav>
</header>
</StyledAppContainer>
<main >
  <Suspense fallback={<div>Loading...</div>}>
    <Outlet/>
    </Suspense>
</main>
</>

    )
}
export default Layout;