<template>
  <div class="mx-4 md:mx-0">
    <div class="flex flex-col justify-center mt-8 sm:flex-row md:mt-16">
      <div class="hidden w-1/4 md:flex" />

      <div class="mt-6 mr-0 md:mt-0 md:mr-8 md:w-1/2">
        <h1
          style="font-family: 'DynaPuff', cursive; color: #654642"
          class="text-[30px] md:text-[40px] text-center md:text-start"
        >
          Deal Of The Day
        </h1>
        <p class="text-center md:text-start md:w-[450px] mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <div class="flex justify-center mb-6 md:justify-start">
          <div v-for="(item, myIndex) in deal" :key="myIndex">
            <DayCardComponent :day="item.day" :name="item.name" />
          </div>
        </div>
        <div class="flex justify-center mb-4 md:mb-0 md:justify-start">
          <button
            style="background: #654642"
            class="px-8 py-2 text-base text-white uppercase rounded-full md:text-xl"
          >
            Shop now
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <img
          class="h-[auto] w-auto"
          :src="require('../../assets/imgs/day.png')"
          alt=""
        />
      </div>
      <div class="hidden w-1/4 md:flex" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DealOfDayComponent',
  data() {
    return {
      deal: [
        {
          day: '01',
          name: 'Day',
        },
        {
          day: '08',
          name: 'Hour',
        },

        {
          day: '09',
          name: 'Minute',
        },
      ],
    }
  },
}
</script>
