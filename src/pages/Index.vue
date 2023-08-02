<template>
  <Layout>
    <section id="about" class="team" ref="about">
      <div class="container__narrow">
        <h2>{{$t('Welcome to Our Online School!')}}</h2>
        <p class="text__center">{{$t('The core developers of the Robonomics project, robotics specialists and PhD research scientists offer to pass through compendious experience based on 7 years of work with web 3.0 projects.')}}</p>
      </div>
    </section>

      <div class="container__mid">
        <h2>{{$t('What can you discover for yourself in the academy?')}}</h2>
      </div>

      <div class="grid-3 discovery__wrapper">

        <div>
          <h4>{{$t('Web3 Advanced Applications')}}</h4>
          <p>{{$t('Find out how cutting-edge web3 technologies can be integrated into personal, city, or corporate settings on examples with practical uses in real-life scenarios.') }}</p>

        <div>
          <h4>{{$t('Strategies for IoT Decentralization')}}</h4>
          <p>{{ $t('Focus on decentralized IoT strategies that provide greater safety and flexibility compared to their centralized counterparts.') }}</p>
        </div>

        <div>
          <h4>{{$t('Latest Robotics Tools')}}</h4>
          <p>{{ $t('Study new robotics frameworks and SDKs and apply them to your projects.') }}</p>
        </div>

        <div>
          <h4>{{$t('Modern Cybernetics')}}</h4>
          <p>{{ $t("Peep insights how Norbert Wiener's principles of cybernetics are applied to modern autonomous systems.") }}</p>
        </div>

        <div>
          <h4>{{$t('Economic Processes for Robots')}}</h4>
          <p>{{ $t('Discover new mechanisms of techno-economic communication between machines and humans.') }}</p>
        </div>

        <div>
          <h4>{{$t('Engineering Skills')}}</h4>
          <p>{{ $t('Learn how to work with single board computers, sensors, smart devices and complex robots.') }}</p>
        </div>

      </div>
    </div>

    <section class="robonomics">
      <section class="container__narrow">
        <h2>{{$t('What is Robonomics?')}}</h2>
        <p class="text__center">{{$t('Robonomics is a secure, serverless and futuristic IoT platform that connects users and smart devices. It enables the exchange of technical and economic information in the form of atomic transactions between user applications, IoT services, and complex robotics.')}} <g-link to="https://robonomics.network/">{{$t('Learn more on Robonomics website') }}</g-link></p>
      </section>
    </section>

  </Layout>
</template>

<script>
export default {

}
</script>

<style scoped>
  a {
    font-weight: 600;
    text-decoration: none;
    color: rgb(11, 21, 126);
  }
</style>
