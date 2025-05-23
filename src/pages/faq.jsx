import FAQ from '@/components/faq/faq';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';
import React from 'react';

const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="FAQ " />
            <FAQ />
        </Wrapper>
    );
};

export default Index;;