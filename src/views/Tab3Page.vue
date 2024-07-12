<template>
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-title>Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="6" size-lg="4" v-for="(item, index) in galleryItems" :key="index">
            <ion-card>
              <ion-img :src="item.image" :alt="item.title"></ion-img>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-content>
</template>

<script>
export default {
  data() {
    return {
      galleryItems: [
        {
          title: 'Student Management System',
          image: 'https://tse2.mm.bing.net/th?id=OIG1.8ZchAzC8HSs4GCHl2JgW&pid=ImgGn',
          description: 'A comprehensive system to manage student data efficiently.'
        },
        {
          title: 'AI-Free-Tools-List',
          image: 'https://tse3.mm.bing.net/th?id=OIG3.Nr47NINB_FEwi7aLuHwN&pid=ImgGn',
          description: 'A curated list of free AI tools for developers and enthusiasts.'
        },
        {
          title: 'Dental Clinic Management System',
          image: 'https://tse1.mm.bing.net/th?id=OIG2.Bi_jiKcvttxhYiHmMVwE&pid=ImgGn',
          description: 'A system to manage appointments, patient records, and billing for dental clinics.'
        }
      ]
    };
  }
};
</script>

<style scoped>
ion-content {
  --background: #f4f4f4;
}

ion-header {
  --background: #3880ff;
  --color: #fff;
}

ion-toolbar ion-title {
  color: #fff;
}
</style>
