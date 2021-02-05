<template>
  <v-container>
    <v-btn class="mx-2" fab dark large color="pink" @click="asyncIncrement({by:100, duration:1000})">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn class="mx-2" fab dark large color="pink" @click="asyncDecrement({by:100, duration:1000})">
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
      ...mapActions([
          'asyncIncrement',
          'asyncDecrement'
      ])
      
  },
};
</script>

