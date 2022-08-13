<template>
  <div>
    <div style="background: #f7f2ed">
      <div class="container mx-auto md:py-10">
        <HeaderComponent />
        <BrandComponent />
      </div>
    </div>
    <div style="background: #654642">
      <div class="container mx-auto py-6 md:py-12">
        <JoinCommunityComponent />
      </div>
    </div>
    <div style="background: white">
      <div class="container mx-auto pt-12 md:pt-24 mb-8 md:mb-16">
        <CollectionsComponent />
      </div>
    </div>
    <div style="background: #f7f2ed">
      <div class="container mx-auto py-6 md:py-12">
        <DealOfDayComponent />
      </div>
    </div>
    <div style="background: #654642">
      <div class="container mx-auto py-6">
        <FooterComponent />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DynaPuff&display=swap',
      },
    ],
  },
}
</script>
