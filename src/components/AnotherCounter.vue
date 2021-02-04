<template>
  <v-container>
    <v-btn class="mx-2" fab dark large color="pink" @click="increment">
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn class="mx-2" fab dark large color="pink" @click="decrement">
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
//import mapMutations from "vuex";

export default {
  methods: {
    //...mapMutations(["increment", "decrement"]),
  },
};
</script>
