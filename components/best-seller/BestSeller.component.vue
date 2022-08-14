<template>
  <div class="mx-4 md:mx-0" style="font-family: 'Raleway', sans-serif">
    <div class="flex flex-col justify-center mt-8 mb-20 sm:flex-row md:mt-16">
      <div class="mt-6 mr-0 md:mt-0 md:mr-8 md:w-1/4">
        <h1
          style="font-family: 'DynaPuff', cursive"
          class="text-[30px] md:text-[40px] text-center md:text-start text-gray-200"
        >
          Best Seller<br />Product
        </h1>
        <p class="text-center md:text-start md:w-[320px] mt-4 text-gray-200">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div class="flex justify-center mt-6 md:mt-12 md:justify-start">
          <button
						style="color: #654642; background: #f7f2ed"
						class="px-8 py-2 text-base font-bold text-white rounded-full"
          >
            See more
          </button>
        </div>
      </div>

      <div
        class="flex items-center justify-center w-full mt-6 md:w-1/4 md:mt-0"
      >
        <div
          style="background: #d3d1d1"
          class="w-full h-[280px] md:mx-4 mt-4 md:mt-0"
        >
          <img class="w-auto h-[200px] mx-auto" alt="" :src="pict02" />
          <div class="px-4 py-2 bg-white">
            <div class="flex">
              <div
                class="mt-3 ml-3"
                v-for="(item, myIndex) in 5"
                :key="myIndex"
              >
                <img
                  class="w-4 h-4 mr-1"
                  :src="require('../../assets/imgs/star.png')"
                />
              </div>
            </div>
            <p class="w-full py-1 font-semibold text-start">Pastel Long Sleeve</p>
            <div class="flex pb-2">
              <p class="text-gray-500 line-through">$220</p>
              <p class="ml-3 font-semibold">$140</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-center w-full mt-6 md:w-1/4 md:mt-0"
      >
        <div
          style="background: #d3d1d1"
          class="w-full h-[280px] md:mx-4 mt-4 md:mt-0"
        >
          <img class="w-auto h-[200px] mx-auto" alt="" :src="pict01" />
          <div class="px-4 py-2 bg-white">
            <div class="flex">
              <div
                class="mt-3 ml-3"
                v-for="(item, myIndex) in 5"
                :key="myIndex"
              >
                <img
                  class="w-4 h-4 mr-1"
                  :src="require('../../assets/imgs/star.png')"
                />
              </div>
            </div>
            <p class="w-full py-1 font-semibold text-start">Pastel Long Sleeve</p>
            <div class="flex pb-2">
              <p class="text-gray-500 line-through">$220</p>
              <p class="ml-3 font-semibold">$140</p>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden w-1/5 md:flex">
        <button class="ml-20"><img :src="require('../../assets/imgs/next.png')" class="w-20 h-20"/></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BestSellerComponent',
  data() {
    return {
      pict01: require('../../assets/imgs/pict01.png'),
      pict02: require('../../assets/imgs/pict02.png'),
    }
  },
}
</script>
