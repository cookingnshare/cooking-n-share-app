<template>
  <q-card class="post-container" flat bordered>
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
      <div class="text-subtitle2 text-grey-8">
        <q-icon name="ion-flame" /> {{ post.estimateTime }} Min. |
        {{ $t("common.ingredients") }} {{ post.ingredients.length }}
      </div>
    </q-card-section>

    <q-carousel
      animated
      v-model="slide"
      arrows
      next-icon="ion-arrow-dropright"
      prev-icon="ion-arrow-dropleft"
      swipeable
      infinite
      height="300px"
    >
      <q-carousel-slide
        v-for="(image, index) in post.photos"
        :key="index"
        :name="index"
        :img-src="`${image.route}/${image.filename}`"
      />
    </q-carousel>

    <q-card-section class="q-pt-none">
      <q-btn
        :ripple="false"
        style="margin-left: -16px"
        :color="isLiked ? 'red' : 'black'"
        round
        flat
        size="lg"
        :icon="isLiked ? 'ion-heart' :'ion-heart-empty'"
        @click="likePost"
      />
      <q-btn
        :ripple="false"
        color="black"
        round
        flat
        size="lg"
        icon="ion-chatbubbles"
        @click="viewComments"
      />
      <q-btn
        :ripple="false"
        color="black"
        round
        flat
        size="lg"
        icon="ion-share-alt"
        @click="sharePost"
      />
      <span class="float-right q-mt-md">
        {{ getTimeAgo(post.createdAt) }}
      </span>
      <div>{{ post.likesCount }} {{ $t("common.likes") }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
import { format } from "timeago.js";
import { ref } from "vue";

export default {
  name: "ComponentPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      slide: ref(0),
      isLiked: ref(false),
    };
  },
  methods: {
    getTimeAgo(timestamp) {
      return format(timestamp, "en_US");
    },
    likePost() {
      this.isLiked = !this.isLiked;
      this.$emit("like-post", this.post);
    },
    viewComments () {
      this.$emit("view-comments", this.post);
    },
    sharePost () {
      this.$emit("share-post", this.post);
    },
  },
};
</script>
<style scoped>
@media only screen and (min-width: 320px) {
  .post-container {
    width: 300px;
  }
}

@media only screen and (min-width: 375px) {
  .post-container {
    width: 355px;
  }
}
@media only screen and (min-width: 414px) {
  .post-container {
    width: 394px;
  }
}
</style>
