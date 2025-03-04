import React from 'react';
import {
  Center,
  Badge,
  Icon,
  Box,
  Text,
  VStack,
  HStack,
  SettingsIcon,
  Divider,
  AddIcon,
  Image,
  CheckIcon,
  Heading,
  Avatar,
  Button,
  Menu,
  MenuIcon,
} from '../../../ui-components';
import {
  PaintBucket,
  PuzzleIcon,
  GlobeIcon,
  BadgeCheckIcon,
  BadgePlusIcon,
} from 'lucide-react-native';

const BadgeStory = ({ text = 'New feature', ...props }: any) => {
  return (
    <Badge {...props}>
      <Badge.Text>{text}</Badge.Text>
      <Badge.Icon ml="$1" as={GlobeIcon} />
    </Badge>
  );
};

export default BadgeStory;

export {
  Center,
  Badge,
  Icon,
  Box,
  Text,
  VStack,
  HStack,
  PuzzleIcon,
  SettingsIcon,
  AddIcon,
  PaintBucket,
  Divider,
  Image,
  CheckIcon,
  Heading,
  Avatar,
  Button,
  GlobeIcon,
  BadgeCheckIcon,
  MenuIcon,
  Menu,
  BadgePlusIcon,
};
