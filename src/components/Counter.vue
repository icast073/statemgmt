<template>
  <v-container>
    <v-btn block color="primary" @click="increment">Increment</v-btn>
    <hr />
    <v-btn block color="error" @click="decrement">Decrement</v-btn>
  </v-container>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.state.counter++;
    },
    decrement() {
      this.$store.state.counter--;
    },
  },
};
</script>
