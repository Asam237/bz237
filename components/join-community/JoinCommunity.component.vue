<template>
  <div>
    <h1
      class="text-base font-normal text-center text-gray-200 md:text-xl md:text-left"
    >
      Join our <span class="font-bold">WoilaTchogou237</span> Community
    </h1>
    <div
      class="flex flex-col justify-center mx-4 mt-3 md:mt-6 md:flex-row md:justify-start md:mx-0"
    >
      <input
        type="text"
        class="rounded-[100px] px-10 py-3 bg-gray-200 md:w-1/3"
        placeholder="ENTER YOUR NAME"
        value=""
        name=""
        id=""
      />
      <input
        type="text"
        class="rounded-[100px] px-10 py-3 bg-gray-200 ml-0 md:ml-10 mt-4 md:mt-0 md:w-1/3"
        placeholder="ENTER YOUR EMAIL"
        value=""
        name=""
        id=""
      />
      <div class="w-1/4 mt-4 md:ml-10 md:mt-0">
        <button
          style="background: #f7f2ed; color: #654642"
          class="w-32 px-4 py-3 font-semibold rounded-full"
        >
          Join now
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JoinCommunityComponent',
}
</script>
