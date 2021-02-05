<template>
  <v-container>
    <v-btn block color="primary" @click="increment(100)">Increment</v-btn>
    <hr />
    <v-btn block color="error" @click="decrement(200)">Decrement</v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
      ...mapActions([
          'increment',
          'decrement'
      ])
  },
};
</script>
