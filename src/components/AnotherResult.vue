<template>
  <v-container>
    <p class="text">Another Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
        "doubleCounter", 
        "stringCounter"])
  },
};
</script>
<style>
.text {
  color:black;

}
</style>
