<template>
  <v-container class="pt-11" fluid>
    <v-card class="transparent" flat>
      <h1 class="mt-11 mb-n5 font-weight-thin display-1">Special Offers</h1>
      <v-card-title>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-layout column style="height: 64vh">
        <v-flex style="overflow: auto">
          <v-data-table
            :headers="headers"
            :items="specialOffers"
            :items-per-page="8"
            :search="search"
            :sort-by="['name', 'vintage']"
          >
            <template v-slot:item.name="{ item }">
              <p :class="item.colorName" style="margin: 0">{{item.name}}</p>
            </template>
            <template v-slot:item.chineseName="{ item }">
              <p :class="item.colorChineseName" style="margin: 0">{{item.chineseName}}</p>
            </template>
            <template v-slot:item.origin="{ item }">
              <p :class="item.colorOrigin" style="margin: 0">{{item.origin}}</p>
            </template>
            <template v-slot:item.appellation="{ item }">
              <p :class="item.colorAppellation" style="margin: 0">{{item.appellation}}</p>
            </template>
            <template v-slot:item.vintage="{ item }">
              <p :class="item.colorVintage" style="margin: 0">{{item.vintage}}</p>
            </template>
            <template v-slot:item.rating="{ item }">
              <p :class="item.colorRating" style="margin: 0">{{item.rating}}</p>
            </template>
            <template v-slot:item.price="{ item }">
              <p :class="item.colorPrice" style="margin: 0">{{item.price}}</p>
            </template>
            <template v-slot:item.discountPrice="{ item }">
              <p :class="item.colorDiscountPrice" style="margin: 0">{{item.discountPrice}}</p>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
      <v-card-text class="subtitle-1 ml-n3">
        Do you want some
        <a href="/new-arrivals">New Arrivals</a>?
        Or check out our wine list
        <a href="/winelist">here</a>.
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "new-arrivals",
  components: {},
  data() {
    return {
      search: ""
    };
  },
  mounted() {},
  computed: {
    ...mapState(["specialOffers"])
  },
  async fetch({ store }) {
    await store.dispatch("loadWineList");
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>