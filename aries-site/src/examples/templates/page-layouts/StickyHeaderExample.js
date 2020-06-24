import React from 'react';
import { Header, Box, Footer, Main, ResponsiveContext, Text } from 'grommet';

export const StickyHeaderExample = () => {
  return (
    <AppContainer overflow="auto">
      <Box fill>
        <Header
          flex={false}
          fill="horizontal"
          height="xxsmall"
          background="green!"
          pad="small"
          round="xsmall"
        >
          <Text weight="bold" color="text-strong">
            Header
          </Text>
        </Header>
        <Box flex overflow="auto" gap="small">
          <Main
            background="orange"
            // height is for demonstration of scroll
            height="xlarge"
            fill={undefined}
            flex={false}
            pad="small"
            round="xsmall"
          >
            <Text weight="bold">Main</Text>
          </Main>
          <Footer
            fill="horizontal"
            height="xxsmall"
            background="blue"
            pad="small"
            round="xsmall"
          >
            <Text weight="bold">Footer</Text>
          </Footer>
        </Box>
      </Box>
    </AppContainer>
  );
};

const AppContainer = ({ ...rest }) => {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      direction={size === 'small' ? 'column-reverse' : 'row'}
      height={size === 'small' ? { max: 'large' } : '100%'}
      width={size === 'small' ? 'medium' : '100%'}
      gap={size !== 'small' ? 'small' : undefined}
      {...rest}
    />
  );
};