<template>
 <v-container>
  <p class="text">Counter is: {{ counter }}</p>
 </v-container>
</template>

<script>
export default {
  computed: {
      counter() {
          return this.$store.getters.doubleCounter;
      }
  },
};
</script>
<style scoped>
.text {
color:black;
}
</style>
