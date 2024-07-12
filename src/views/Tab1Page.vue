<template>
  <ion-page>
  <ion-header>
  <ion-toolbar>
    <ion-title>Best AI Tools for Developers</ion-title>
  </ion-toolbar>
  <ion-toolbar>
      <ion-searchbar v-model="searchQuery" placeholder="Search AI tools" debounce="500"></ion-searchbar>
  </ion-toolbar>
</ion-header>


    <ion-content color="light" style="padding: 2pc" :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tools List</ion-title>
        </ion-toolbar>
      </ion-header>

   

  <ion-list>
 <ion-item v-for="(item, index) in filteredItems" :key="index" button expand="block" @click="setOpen(true , item.description,item.link)" class="custom-item">
  <ion-avatar slot="start">
    <img
      loading="lazy"
      src="https://assets-global.website-files.com/6307393e4082686de9f8daee/640ef0d23b047071cf8cc7fe_artgenerator.png"
      alt="avatar"
    />
  </ion-avatar>
  <ion-label>
    <h2 style="color:#ffffff">{{ item.Name }}</h2>
    <p style="color:#cccccc"><strong>Category:</strong> {{ item.Category }}</p>
    <p style="color:#cccccc">{{ item.description }}</p>
  </ion-label>
</ion-item>
 <ion-toast
      :is-open="isOpen"
        trigger="footerAnchor"
      position="bottom"
      position-anchor="footer"
      :message="string2"
      :duration="5000"
      @didDismiss="setOpen(false)"
    ></ion-toast>

    
    
  </ion-list>
   <ion-infinite-scroll>
      <ion-infinite-scroll-content
        loading-text="Please wait..."
        loading-spinner="bubbles"
      ></ion-infinite-scroll-content>
    </ion-infinite-scroll>
  

      <ion-infinite-scroll @ionInfinite="ionInfinite">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { db } from "@/db_firebase/firebaseconfig";
import { collection, onSnapshot } from "firebase/firestore";
import { defineComponent, reactive, ref, computed } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  InfiniteScrollCustomEvent,
  IonSearchbar,
   IonButton, IonToast
} from "@ionic/vue";
  import { pin, share, trash } from 'ionicons/icons';

import { IonIcon } from "@ionic/vue";
import { logoIonic } from "ionicons/icons";

export default defineComponent({
  name: "Tab1",
  components: {
    pin, share, trash,
      IonButton, IonToast,
    logoIonic,
    IonIcon,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonAvatar,
    IonItem,
    IonLabel,
    IonList,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonSearchbar,
  },
  setup() {
    const searchQuery = ref("");
    const items = reactive([]);

    const listAITools = async () => {
      const toolsCollectionRef = collection(db, "tools-ai");
      onSnapshot(toolsCollectionRef, (snapshot) => {
        const tools = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        items.splice(0, items.length, ...tools);
      });
    };

    listAITools();

    const filteredItems = computed(() => {
      return items.filter((tool) =>
        `${tool.Name} ${tool.Category}`
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
      );
    });

    const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
      setTimeout(() => ev.target.complete(), 500);
    };

    const isOpen = ref(false);

    const string2 = ref('hello my name dixit')
    
      const setOpen = (state: boolean , string , url ) => {
        isOpen.value = state;
        string2.value = string 
        setTimeout(() => {

          window.open(url)
        },2000)
      };


    return { ionInfinite, filteredItems, searchQuery ,pin, share, trash , setOpen , isOpen , string2};
  },
});
</script>

<style scoped>
/* Custom styles for ion-item */
.custom-item {
  border-bottom: 1px solid #ccc; /* Example border */
}

/* Override Ionic component styles */
ion-label h2 {
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
}

ion-label p {
  margin: 0.2em 0;
}

ion-button {
  --color: #ffffff; /* Button text color */
  --background: #007bff; /* Button background color (primary color) */
  --border-radius: 5px; /* Button border radius */
  --padding-start: 12px; /* Button padding */
  --padding-end: 12px;
}

ion-button:hover {
  --background: #0056b3; /* Button background color on hover */
}
ion-avatar {
  --border-radius: 25px;
}
.custom-item {
  border-bottom: 1px solid #ccc; /* Example border */
}

/* Override Ionic component styles */
ion-label h2 {
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
}

ion-label p {
  margin: 0.2em 0;
}

ion-button {
  --color: #ffffff; /* Button text color */
  --background: #007bff; /* Button background color (primary color) */
  --border-radius: 5px; /* Button border radius */
  --padding-start: 12px; /* Button padding */
  --padding-end: 12px;
}

ion-button:hover {
  --background: #0056b3; /* Button background color on hover */
}.custom-item {
  --background: #2a2a2a; /* Dark background for items */
  color: #ffffff; /* Default text color */
  border-bottom: 1px solid #444444; /* Border color */
  padding: 16px;
  display: flex;
  align-items: center;
}

.custom-item ion-avatar img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.custom-item ion-label {
  margin-left: 16px;
  color: #ffffff; /* Text color */
}

.custom-item ion-label h2 {
  font-size: 1.2em;
  margin: 0;
  color: #ffffff; /* Heading color */
}

.custom-item ion-label p {
  margin: 0;
  font-size: 0.9em;
  color: #cccccc; /* Paragraph text color */
}

@media (max-width: 600px) {
  .custom-item {
    flex-direction: column;
    align-items: flex-start;
  }

  .custom-item ion-avatar img {
    width: 40px;
    height: 40px;
  }

  .custom-item ion-label {
    margin-left: 0;
    margin-top: 10px;
  }
}

ion-header {
  --background: #1e1e1e;
  --color: #ffffff;
}

ion-toolbar {
  --background: #333333;
  --color: #ffffff;
}

ion-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
}


ion-searchbar {
  --background: #fff;
  --color: #3880ff;
}
</style>
