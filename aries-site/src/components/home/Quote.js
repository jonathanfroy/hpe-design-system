import React from 'react';
import { Avatar, Box, Image, Paragraph, Stack, Text } from 'grommet';
import { useDarkMode } from '../../utils';

export const Quote = () => {
  const darkMode = useDarkMode();

  const quoteLines = `/static/images/quote-lines${
    darkMode.value ? '-dark' : ''
  }.svg`;

  return (
    <Box direction="row-responsive" gap="large" justify="center" pad="large">
      <Box
        align="center"
        justify="center"
        gap="medium"
        background={{
          image: `url(${quoteLines})`,
          size: 'auto',
          position: 'top left',
        }}
        pad={{ left: 'xlarge' }}
        flex={false}
      >
        <Avatar src="/static/images/t_harms_bio_image.png" size="149px" />
        <Box align="center">
          <Text size="xlarge" weight="bold" color="text-strong">
            Tim Harms
          </Text>
          <Text size="xlarge">HPE Head of Brand</Text>
        </Box>
      </Box>
      <Stack>
        <Box
          border={{ size: '3px', color: 'text-weak' }}
          pad="medium"
          margin="small"
          width={{ max: '678px' }}
        >
          <Paragraph size="xxlarge" textAlign="center">
            The HPE Design System empowers developers, designers and others to
            create consistent, accessible and flexible interfaces.
          </Paragraph>
        </Box>
        <Box fill align="end" justify="end">
          <Image src={quoteLines} margin={{ right: '-138px' }} />
        </Box>
        <Box fill justify="between">
          <Text
            size="124px"
            weight="bold"
            color="brand"
            style={{ marginLeft: '-15px' }}
          >
            &ldquo;
          </Text>
          <Text
            size="124px"
            color="brand"
            weight="bold"
            alignSelf="end"
            textAlign="end"
            style={{ marginRight: '-15px' }}
          >
            &rdquo;
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
