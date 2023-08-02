<template>
  
  <Layout>
      <section class="text__hyphened">
        <section class="lesson-section container__mid">
          <client-only>
            <VueRemarkContent />
          </client-only>
        </section>
      </section>
  </Layout>
  
</template>



<page-query>
  query ($id: ID!) {
    post(id: $id) {
      id
      title
      description
      fileInfo {
        path
        name
      }
    }
  }
  </page-query>
  
  <script>
    export default {

    
    }
  </script>

<style>

  .text__hyphened {
    margin-top: calc(var(--gap) * 2);
  }

  .lesson-section {
    /* padding: var(--gap); */
    text-align: left;
    max-width: 900px;
  }


  .lesson-section h1, 
  .lesson-section h2,
  .lesson-section h3,
  .lesson-section h4,
  .lesson-section h5,
  .lesson-section h6 {
    font-family: var(--font-main);
    margin-bottom: calc(var(--gap) * 0.5);
    margin-top: calc(var(--gap) * 1.5);
    text-align: left;
  }

  .lesson-section h3,
  .lesson-section h4,
  .lesson-section h5,
  .lesson-section h6 {
    margin-top: calc(var(--gap) * 1);
  }

  .lesson-section p {
    line-height: 1.7;
  }

  .lesson-section ul, .lesson-section ol  {
    margin-bottom: calc(var(--gap) * 1.5);
  }

  .lesson-section li {
    margin-bottom: calc(var(--gap) * 0.5);
    margin-left: calc(var(--gap) * 0.5);
  }

  .lesson-section .container__reg {
    padding: 0;
  }

  .lesson-section .youtube-embed__wrapper {
    margin-bottom: var(--gap);
  }

  .lesson-section a {
    word-break: break-all;
    color: #2d2dae;
    font-weight: 500;
    text-decoration: none;
  }

  @media screen and (max-width: 560px) {
    .lesson-section p {
      font-size: 1rem;
    }
  }
    

</style>