<template>
  <header
    class="flex flex-col md:flex-row flex-start md:justify-between p-4 md:p-0"
  >
    <div>
      <h4
        class="text-base md:text-xl"
        style="font-family: 'DynaPuff', cursive; color: #654642"
      >
        WoilaTchogou237
      </h4>
    </div>
    <div class="flex flex-col md:flex-row">
      <nav v-for="(item, myIndex) in main" :key="myIndex">
        <ul class="mt-2 md:my-0 mx-0 md:mx-2">
          <a
            class="uppercase text-md md:text-base font-normal hover:underline"
            :href="item.link"
            target="_blank"
            >{{ item.name }}</a
          >
        </ul>
      </nav>
    </div>
    <div class="pt-4 md:pt-0 flex flex-row">
      <nav v-for="(item, myIndex) in icons" :key="myIndex">
        <ul class="mt-2 md:my-0 mx-0 md:mx-2">
          <a :href="item.link"
            ><img class="w-5 h-5 ml-2" :src="item.icon"
          /></a>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      main: [
        {
          name: 'Home',
          link: '#',
        },
        {
          name: 'Men',
          link: '#',
        },
        {
          name: 'Women',
          link: '#',
        },
        {
          name: 'Trending',
          link: '#',
        },
      ],
      icons: [
        {
          icon: require('../../assets/imgs/search.png'),
          link: '#',
        },
        {
          icon: require('../../assets/imgs/user.png'),
          link: '#',
        },
        {
          icon: require('../../assets/imgs/shopping.png'),
          link: '#',
        },
      ],
    }
  },
}
</script>
