import ProjectDetails from '@/components/project-details';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const Index = () => {
    return (
      <Wrapper>
            <SEO pageTitle="Project Details" />
            <ProjectDetails />
      </Wrapper>
    );
};

export default Index;;