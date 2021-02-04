<template>
  <v-container>
    <v-btn block color="primary" @click="increment">Increment</v-btn>
    <hr />
    <v-btn block color="error" @click="decrement">Decrement</v-btn>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
      ...mapMutations([
          'increment',
          'decrement'
      ])
  },
};
</script>
