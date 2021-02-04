<template>
 <v-container>
  <p>Another Counter is: {{ counter }}</p>
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
