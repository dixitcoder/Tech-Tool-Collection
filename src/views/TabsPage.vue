<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/radio">
          <ion-icon :icon="home" />
        </ion-tab-button>

     
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon } from '@ionic/vue';
import { home, list, heart } from 'ionicons/icons';

export default defineComponent({
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon
  },
  data() {
    return {
      home,
      list,
      heart
    };
  },
});
</script>
