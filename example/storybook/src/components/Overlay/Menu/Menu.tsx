import React from 'react';

import {
  Button,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
  Center,
} from '../../../ui-components';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuStory = ({ placement = 'bottom' }: any) => {
  return (
    <Center>
      <Menu
        isOpen={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
        placement={placement}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps}>
              <Button.Text>Menu</Button.Text>
            </Button>
          );
        }}
      >
        <Menu.Item key="Item1" textValue="Item1">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Community</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Roboto" textValue="Roboto">
          <Icon as={PuzzleIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Plugins</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Theme" textValue="Theme">
          <Icon as={PaintBucket} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Theme</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Settings</Menu.ItemLabel>
        </Menu.Item>
        <Menu.Item key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" mr="$2" />
          <Menu.ItemLabel size="sm">Add account</Menu.ItemLabel>
        </Menu.Item>
      </Menu>
    </Center>
  );
};

export default MenuStory;

export {
  Button,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
  PaintBucket,
  PuzzleIcon,
};
