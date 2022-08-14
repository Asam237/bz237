<template>
  <div class="flex flex-col p-4 md:pt-28 md:flex-row">
    <div class="justify-center hidden md:flex md:flex-col w-28">
      <div style="background: #654642; width: 1px" class="ml-2 h-14" />
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
        class="text-[30px] md:text-[40px] text-center md:text-start"
      >
        All your style <br />Are here
      </h1>
      <p class="w-full my-4 font-normal text-center md:my-8 md:w-3/4 md:text-left">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et
      </p>
      <div class="flex justify-center mt-4 mb-8 md:mb-0 md:justify-start">
        <button
          style="background: #654642"
          class="px-8 py-2 text-white rounded-full md:px-6"
        >
          Shop now
        </button>
      </div>
    </div>
    <div class="flex justify-center w-full mt-4 mb-12 md:justify-start md:w-2/5 md:mt-8 md:mb-0">
      <img class="w-[300px] h-auto" :src="brandpic" alt="" />
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
