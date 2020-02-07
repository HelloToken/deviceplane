import React from 'react';
import styled from 'styled-components';
import { useActive, useCurrentRoute } from 'react-navi';

import { Column, Link, Text, Icon } from './core';

const links = [
  {
    title: 'Devices',
    icon: 'multi-select',
    to: '/devices',
  },
  {
    title: 'Provisioning',
    icon: 'projects',
    to: '/provisioning',
  },
  {
    title: 'Applications',
    icon: 'applications',
    to: '/applications',
  },
  {
    title: 'Monitoring',
    icon: 'pulse',
    to: '/monitoring',
  },
  {
    title: 'IAM',
    icon: 'people',
    to: '/iam',
  },
  {
    title: 'Settings',
    icon: 'settings',
    to: '/settings',
  },
];

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${props => props.theme.transitions[0]};
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none !important;

  background-color: ${props =>
    props.active ? props.theme.colors.grays[1] : 'inherit'};
  color: ${props =>
    props.active ? props.theme.colors.primary : props.theme.colors.white};

  &:hover {
    color: ${props =>
      props.active ? props.theme.colors.primary : props.theme.colors.pureWhite};
    background-color: ${props =>
      props.active ? props.theme.colors.grays[1] : props.theme.colors.grays[0]};
  }

  & span {
    color: ${props =>
      props.active ? props.theme.colors.primary : props.theme.colors.white};
  }

  & > div > svg {
    fill: ${props =>
      props.active
        ? props.theme.colors.primary
        : props.theme.colors.white} !important;
  }

  &:last-child {
    margin-top: auto;
  }
`;

const Sidebar = () => {
  const route = useCurrentRoute();

  if (!route) {
    return null;
  }

  const projectSelected = !!route.data.params.project;

  return (
    projectSelected && (
      <Column
        flexDirection={['row', 'row', 'row', 'column']}
        width={['100%', '100%', '100%', 136]}
        bg="black"
        alignItems={['unset', 'unset', 'unset', 'center']}
        justifyContent={['space-between', 'space-between', 'center', 'unset']}
        flexShrink={0}
        paddingY={[2, 2, 2, 0]}
        overflow="auto"
      >
        {links.map(({ to, title, icon }) => {
          const href = `/${route.data.params.project}${to}`;

          return (
            <SidebarLink
              href={href}
              width={['100%', '100%', '100%', 120]}
              paddingY={[2, 2, 2, 4]}
              marginBottom={[0, 0, 0, 2]}
              marginX={[1, 1, 1, 0]}
              key={title}
              active={useActive(href, { exact: false })}
            >
              <Column alignItems="center">
                <Icon
                  icon={icon}
                  color="white"
                  size={['16px', '16px', '16px', '24px']}
                />
                <Text
                  marginTop={[2, 2, 2, 3]}
                  display={['none', 'none', 'block']}
                  fontSize={0}
                >
                  {title}
                </Text>
              </Column>
            </SidebarLink>
          );
        })}
      </Column>
    )
  );
};

export default Sidebar;
