<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tab1">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tools List</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/Home">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Login</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/vue';
import { triangle, ellipse, square } from 'ionicons/icons';

export default {
  components: {
    IonPage,
    IonTabs,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  },
  
  data() {
    return {
      triangle,
      ellipse,
      square,
    };
  },
};
</script>

<style scoped>
/* Add any styles you need here */
</style>
