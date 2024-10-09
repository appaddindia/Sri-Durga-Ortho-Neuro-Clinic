import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Sri Durga Ortho & Neuro Clinic is a premier healthcare facility specializing in orthopedic and neurological treatments. Our skilled team includes Dr. Shashikanth Vokkaleri, a Joint Replacement and Arthroscopic Surgeon, and Dr. Surbhi Chaturvedi, an award-winning Neurologist. We offer services like knee and hip replacements, arthroscopy, and neurological disorder management, prioritizing advanced care for your health and well-being. Book your appointment today!" />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/assets/img/logo/logo.jpg" />
    </Head>
  </>
);

export default SEO;
