<template>
  <div class="mx-4 md:mx-0">
    <div>
      <h1
        style="font-family: 'DynaPuff', cursive; color: #654642"
        class="text-[30px] md:text-[40px] text-center"
      >
        Our Product
      </h1>
      <div class="flex flex-row justify-center mt-4">
        <nav v-for="(item, myIndex) in main" :key="myIndex">
          <ul class="mx-2 my-0 mt-2">
            <a
              class="font-normal uppercase text-md md:text-base hover:underline"
              :href="item.link"
              target="_blank"
              >{{ item.name }}</a
            >
          </ul>
        </nav>
      </div>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center mt-8 md:mt-16">
        <div v-for="(item, myIndex) in products" :key="myIndex">
          <ProductCardComponent :name="item.name" :mypict="item.picture" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OurProductComponent',
  data() {
    return {
      main: [
        {
          name: 'Hot',
          link: '#',
        },
        {
          name: 'On Sale',
          link: '#',
        },
        {
          name: 'Trending now',
          link: '#',
        },
        {
          name: 'Trending now',
          link: '#',
        },
        {
          name: 'New arrival',
          link: '#',
        },
      ],

      products: [
        {
          name: 'Pastel Long Sleeve',
          picture: 'pict01.png',
        },
        {
          name: 'Pastel Long Sleeve',
          picture: 'pict02.png',
        },
        {
          name: 'Pastel Long Sleeve',
          picture: 'pict01.png',
        },
        {
          name: 'Pastel Long Sleeve',
          picture: 'pict01.png',
        },
        {
          name: 'Pastel Long Sleeve',
          picture: 'pict01.png',
        },
        {
          name: 'Pastel Long Sleeve',
          picture: 'pict01.png',
        },
        {
          name: 'Pastel Long Sleeve',
          picture: 'pict01.png',
        },
        {
          name: 'Pastel Long Sleeve',
          picture: 'pict01.png',
        },
      ],
    }
  },
}
</script>
