<template>
  <div>
    <div style="background: #f7f2ed">
      <div class="container mx-auto md:py-12">
        <HeaderComponent />
        <BrandComponent />
      </div>
    </div>
    <div style="background: #654642">
      <div class="container py-6 mx-auto md:py-20">
        <JoinCommunityComponent />
      </div>
    </div>
    <div style="background: white">
      <div class="container pt-12 mx-auto mb-8 md:pt-24 md:mb-16">
        <CollectionsComponent />
      </div>
    </div>
    <div style="background: #654642">
      <div class="container py-6 mx-auto md:py-12">
        <BestSellerComponent />
      </div>
    </div>
    <div style="background: white">
      <div class="container pt-12 mx-auto mb-8 md:pt-24 md:mb-16">
        <OurProductComponent />
      </div>
    </div>
    <div style="background: #f7f2ed" class="mt-24 md:mt-0">
      <div class="container py-6 mx-auto md:py-12">
        <DealOfDayComponent />
      </div>
    </div>
    <div style="background: #654642">
      <div class="container py-6 mx-auto">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
		title: "WoilaTchogou237  |  Accueil",
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DynaPuff&display=swap',
      },
    ],
  },
}
</script>
