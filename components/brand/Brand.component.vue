<template>
  <div class="p-4 md:p-0 mt-8 md:mt-16 flex flex-col md:flex-row">
    <div class="hidden md:flex md:flex-col justify-center w-28">
      <div style="background: #654642; width: 1px" class="h-14 ml-2" />
      <div class="my-6">
        <nav class v-for="(item, myIndex) in icons" :key="myIndex">
          <ul class="mt-5">
            <a :href="item.link"><img class="w-4 h-4" :src="item.icon" /></a>
          </ul>
        </nav>
      </div>
      <div style="background: #654642; width: 1px" class="h-24 ml-2" />
    </div>
    <div class="w-full md:w-3/5">
      <h1
        style="font-family: 'DynaPuff', cursive; color: #654642"
        class="text-[30px] md:text-[40px]"
      >
        All your style <br />Are here
      </h1>
      <p class="my-4 md:my-8 text-normal w-full md:w-3/4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et
      </p>
      <button
        style="background: #654642"
        class="rounded-full px-4 py-2 text-white"
      >
        Shop now
      </button>
    </div>
    <div class="w-full md:w-2/5 flex justify-center mt-4 md:mt-8">
      <img class="w-72 h-72 rounded-full" :src="brandpic" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandComponent',
  data() {
    return {
      brandpic: require('../../assets/imgs/ecommerce.png'),
      icons: [
        {
          icon: require('../../assets/imgs/instagram.png'),
          link: '#',
        },
        {
          icon: require('../../assets/imgs/twitter.png'),
          link: '#',
        },
        {
          icon: require('../../assets/imgs/youtube.png'),
          link: '#',
        },
      ],
    }
  },
}
</script>
