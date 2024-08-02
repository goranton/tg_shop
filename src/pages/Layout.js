import {
  Outlet,
  useNavigate,
  useMatch,
} from 'react-router-dom';

import {
  AppRoot,
  SegmentedControl,
} from '@telegram-apps/telegram-ui'

function MenuLink({ to, children }) {
  const match = useMatch({
    path: to,
    end: true,
  });

  const navigate = useNavigate();

  return (
    <SegmentedControl.Item onClick={() => navigate(to)} selected={match}>
      {children}
    </SegmentedControl.Item>
  );
}

export default function Layout() {
  const navigation = [
    {name: 'Главная', link: '/'},
    {name: 'Заказы', link: '/orders'},
    {name: 'Контакты', link: '/contacts'},
  ];

  return (
    <AppRoot appearance="light">
      <SegmentedControl>
        {navigation.map((item) => (
          <MenuLink key={item.link} to={item.link}>
            {item.name}
          </MenuLink>
        ))}
      </SegmentedControl>
      <Outlet />
    </AppRoot>
  );
}
