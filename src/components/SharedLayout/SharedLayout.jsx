import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Main,
  Header,
  Controls,
  ControlsLink,
} from './SharedLayout.styled';
import Loader from 'components/Loader';

function SharedLayout() {
  return (
    <Container>
      <Header>
        <Controls>
          <ControlsLink to="/" end>
            Головна
          </ControlsLink>
          <ControlsLink to="/about">Про нас</ControlsLink>
        </Controls>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}

export default SharedLayout;
