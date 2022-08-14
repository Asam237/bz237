<template>
  <div class="mt-12 mb-24 md:mx-4 md:mt-0">
    <div
      style="background: #d3d1d1"
      class="w-full h-[250px] md:mx-4 mt-4 md:mt-0"
    >
      <img
        class="w-auto h-full mx-auto"
        alt=""
        :src="require(`../../assets/imgs/${mypict}`)"
      />
      <div class="flex">
        <div class="mt-3 ml-3" v-for="(item, myIndex) in 5" :key="myIndex">
          <img
            class="w-4 h-4 mr-1"
            :src="require('../../assets/imgs/star.png')"
          />
        </div>
      </div>
      <p class="w-full py-1 font-normal bg-white text-start">
        {{ name }}
      </p>
      <div class="flex">
        <p class="text-gray-500 line-through">$220</p>
        <p class="ml-3">$140</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductCardComponent',
  props: {
    mypict: {
      type: String,
    },
    name: {
      type: String,
    },
  },
}
</script>
