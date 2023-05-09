import React from 'react';

import { Avatar, Text, Group } from '@mantine/core';
import profileImage from '../../../../Images/profile_image_500_500.jpg';
import useStyles from './Banner.styles';

function Banner() {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap>
        <Avatar src={profileImage} size={130} radius="md" />
        <div>
          <Text fz="lg" fw={700} c="dimmed">
            Hi 👋
          </Text>
          <Text fz="lg" fw={500} className={classes.name}>
            I am Michael Treyvaud
          </Text>
          <Group noWrap spacing={10} mt={3}>
            <Text fz="xs" c="dimmed">
              Software Generalist, AWS expert and AI enthusiast
            </Text>
          </Group>
          <Group noWrap spacing={10} mt={5}>
            <Text fz="xs" c="dimmed">
              michael.treyvaud@gmail.com
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}

export default Banner;
