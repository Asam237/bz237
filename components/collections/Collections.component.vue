<template>
  <div class="mx-4 mx-0">
    <h1
      style="font-family: 'DynaPuff', cursive; color: #654642"
      class="text-[30px] md:text-[40px] text-center"
    >
      New Collection
    </h1>
    <p class="md:text-center">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod.
    </p>
    <div class="flex flex-col sm:flex-row justify-center mt-8 md:mt-16">
      <div v-for="(item, myIndex) in collections" :key="myIndex">
        <CollectionCardComponent :name="item.name" :mypict="item.picture" />
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
          picture: 'pict02.png',
        },
        {
          name: 't-shirt',
          picture: 'pict01.png',
        },
      ],
    }
  },
}
</script>
