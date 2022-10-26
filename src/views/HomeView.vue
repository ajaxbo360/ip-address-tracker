<template>
  <div class="flex flex-col h-screen max-h-screen ">
    <div class="flex justify-center relative px-4 pt-10 pb-32 bg-image-pattern bg-cover">
       
      <div class="w-full max-w-screen-sm">
        <h1 class="pb-4 text-3xl text-center text-white">IP Address Tracker</h1>
        <div class="flex">
            <input type="text" class="flex-1 py-3 px-3 rounded-tl-md rounded-bl-md focus:outline-none" placeholder="Search for any IP address or leave empty to get your ip info"/>
            <div class="flex justify-center items-center bg-black py-4 px-4 rounded-tr-md rounded-br-md cursor-pointer ">
                 <div class="bg-arrow-icon bg-cover w-5 h-6"></div>
            </div>
        </div>

      </div>
      <IpAddressInfo />
    </div>
  </div>
</template>

<script>
import IpAddressInfo from '@/components/IpAddressInfo.vue';

export default {

  name: 'HomeView',
  components: {
    IpAddressInfo
  }
}
</script>
