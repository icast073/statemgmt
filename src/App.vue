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
          width="30"
        />
      </div>
      <v-spacer></v-spacer>
      <span class="mr-2">Irma Koelig</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-app-bar>

    <v-main>
      <template>
        <v-parallax height="1200" dark src="./assets/log.jpg">
          <v-row align="center" justify="center">
            <v-row align="center" justify="center">
              <v-col align="center" justify="center" cols="4"></v-col>
              <v-col align="center" justify="center" cols="6">
                <h4 class="subheading text">
                  <v-text-field
                    label="Some chars?"
                    type="text"
                    v-model="value"
                    hide-details="auto"
                  >
                  </v-text-field>
                  <p>The chars: {{ value }}</p> 
                </h4>
              </v-col>
               <v-col align="center" justify="center" cols="2"></v-col>
            </v-row>
          </v-row>
          <v-row>
            <v-col align="center" justify="center" cols="12">
              <Result />
              <AnotherResult />
              <Counter />
              <AnotherCounter />
            </v-col>
          </v-row>
        </v-parallax>
      </template>
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
  computed: {
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
      
    },
  },
  methods:{
    updateValue(event) {
      this.$store.dispatch('updateValue', event.target.value);
    }
  },
  components: {
    Result,
    Counter,
    AnotherResult,
    AnotherCounter,
  },
};
</script>

<style scoped>
.text {
  color: black;
}
</style>
