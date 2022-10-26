<template>
  <div class="flex flex-col h-screen max-h-screen ">
    <div class=" z-40 flex justify-center relative px-4 pt-10 pb-32 bg-image-pattern bg-cover">
       
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
    <!-- Our map goes here  -->
    <div id="map" class="z-10 h-full"></div>
  </div>
</template>

<script>
import IpAddressInfo from '@/components/IpAddressInfo.vue';
import leaflet from 'leaflet';
import {onMounted} from "vue"
export default {
  
  name: 'HomeView',
  components: {
    IpAddressInfo
  },
  setup() {
    let map;

    onMounted(() => {
      
      map = leaflet.map('map').setView([51.505, -0.09], 13);
      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWpheGJvMzYwIiwiYSI6ImNsNzVocXh5ODEzbHk0MG1hNWp2NWRmNmoifQ.7EDuSDK-CZlnfXuec_foxg",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1IjoiYWpheGJvMzYwIiwiYSI6ImNsNzVocXh5ODEzbHk0MG1hNWp2NWRmNmoifQ.7EDuSDK-CZlnfXuec_foxg",
          }
        )
        .addTo(map);
    })
  }
}
</script>
