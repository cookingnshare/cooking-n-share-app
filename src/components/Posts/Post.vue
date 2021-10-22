<template>
  <q-card flat bordered style="max-width: 400px">
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
      <div class="text-subtitle2">
        <q-icon name="ion-alarm" /> {{ post.estimateTime }} Min. |
        {{ $t("common.ingredients") }} {{ post.ingredients.length }}
      </div>
    </q-card-section>

    <img src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-card-section class="q-pt-none">
      <q-btn
        style="margin-left: -16px"
        color="black"
        round
        flat
        size="lg"
        icon="ion-heart-empty"
      />
      <q-btn color="black" round flat size="lg" icon="ion-chatbubbles" />
      <q-btn color="black" round flat size="lg" icon="ion-share-alt" />
      <span class="float-right q-mt-md">
        {{ getTimeAgo(post.createdAt) }}
      </span>
      <div>{{ post.likesCount }} {{ $t("common.likes") }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { format } from "timeago.js";
export default {
  name: "ComponentPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
  methods: {
    getTimeAgo(timestamp) {
      return format(timestamp, "en_US");
    },
  },
};
</script>
