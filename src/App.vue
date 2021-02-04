<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Me Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <span class="mr-2">Irma Koelig</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-main>
      <Result  />
      <AnotherResult />
      <Counter />
      <AnotherCounter />
    </v-main>
  </v-app>
</template>

<script>
import Result from "./components/Result";
import Counter from "./components/Counter";
import AnotherResult from "./components/AnotherResult";
import AnotherCounter from "./components/AnotherCounter";

export default {
  name: "App",
  components: {
    Result,
    Counter,
    AnotherResult,
    AnotherCounter
  }
};
</script>
