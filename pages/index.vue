<template>
  <div>
    <div style="background: #f7f2ed">
      <div class="container mx-auto md:py-10">
        <HeaderComponent />
        <BrandComponent />
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
