<template>
  <div class="mx-4 md:mx-0">
    <div>
      <h1
        style="font-family: 'DynaPuff', cursive; color: #654642"
        class="text-[30px] md:text-[40px] text-center"
      >
        New Collection
      </h1>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod.
      </p>
      <div class="flex flex-col justify-center mt-8 sm:flex-row md:mt-16">
        <div v-for="(item, myIndex) in collections" :key="myIndex">
          <CollectionCardComponent :name="item.name" :mypict="item.picture" />
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-center mt-8 sm:flex-row md:mt-16">
      <div
        class="h-[350px] w-full md:w-[350px] rounded-tl-[100px] flex justify-center items-center"
        style="background: #a1e7f0"
      >
        <img :src="require('../../assets/imgs/pict02.png')" alt="" />
      </div>
      <div class="mt-6 ml-0 md:mt-0 md:ml-8 md:w-1/4">
        <h1
          style="font-family: 'DynaPuff', cursive; color: #654642"
          class="text-[30px] md:text-[40px] text-center md:text-start"
        >
          Best Fashion <br />Sicnce 2022
        </h1>
        <p class="text-center md:text-start md:w-[450px] mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CollectionsComponent',
  data() {
    return {
      collections: [
        {
          name: 'sweeter',
          picture: 'pict01.png',
        },
        {
          name: 't-shirt',
          picture: 'pict04.png',
        },
        {
          name: 't-shirt',
          picture: 'pict03.png',
        },
      ],
    }
  },
}
</script>
