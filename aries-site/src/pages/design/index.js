import React from 'react';
import { Text } from 'grommet';

import { ContentSection, Layout, MainContent, SideBar } from '../../layouts';
import { MainDescription, MainHeading } from '../../components';

const Index = () => (
  <>
    <Layout title="Design">
      <SideBar>
        <Text>Secondary Nav</Text>
      </SideBar>
      <MainContent>
        <ContentSection>
          <MainHeading>Primer</MainHeading>
          <MainDescription>
            Each element is tailored for the web and has resources for both the
            designer, developer, and casual users of Aries. The elements alone
            provide a base set of guidelines that will help you succeed when
            desiging experiences for HPE.
          </MainDescription>
        </ContentSection>
      </MainContent>
    </Layout>
  </>
);

export default Index;