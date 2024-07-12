<template>
  <ion-content>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
  
    </ion-header>
    <ion-grid>
      <ion-row>
        <ion-col size="12" size-md="6" size-lg="4" v-for="(item, index) in filteredItems" :key="index">
          <ion-card>
            <ion-img :src="item.image" :alt="item.description"></ion-img>
            <ion-card-header>
              <ion-card-title style="color:white">{{ item.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>{{ item.description }}</p>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      galleryItems: [
        {
          title: 'Dixitcoder',
          image: 'https://tse2.mm.bing.net/th?id=OIG1.8ZchAzC8HSs4GCHl2JgW&pid=ImgGn',
          description: 'Dixitcoder is a passionate web developer and AI enthusiast focused on creating innovative solutions. With skills in Vue.js, Vuetify, and Firebase, they have worked on various projects including a Student Management System, an AI-Free-Tools-List, and a Dental Clinic Management System.'
        },
        {
          title: 'Dixitcoder',
          image: 'https://tse3.mm.bing.net/th?id=OIG3.Nr47NINB_FEwi7aLuHwN&pid=ImgGn',
          description: 'Dixitcoder excels in developing responsive web applications using Vue.js and Vuetify. They are experienced in collaborating with UI/UX designers and back-end developers, implementing state management using Vuex, and maintaining thorough documentation.'
        },
        {
          title: 'Dixitcoder',
          image: 'https://tse1.mm.bing.net/th?id=OIG2.Bi_jiKcvttxhYiHmMVwE&pid=ImgGn',
          description: 'Dixitcoder has a keen interest in AI technologies and has contributed to various projects, such as providing 256 AI links for free. Their hobbies include working on Vue.js projects and continuously enhancing their web development skills.'
        },
        {
          title: 'Dixitcoder',
          image: 'https://tse1.mm.bing.net/th?id=OIG2.t.dyl11xeF1cBrW5MA0w&pid=ImgGn',
          description: 'With a focus on crafting digital experiences with code and creativity, Dixitcoder transforms ideas into reality. They are a dreamer by night and a builder by day, always striving to bridge the gap between innovation and implementation.'
        }
      ]
    };
  },
  computed: {
    filteredItems() {
      return this.galleryItems.filter(item =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
ion-content {
  --background: #f4f4f4;
}

ion-card {
  margin: 10px;
}

ion-card-title {
  color: #333;
  font-size: 1.2em;
  margin: 0;
}

ion-card-content {
  color: #666;
  font-size: 0.9em;
}

ion-img {
  border-radius: 10px;
}

ion-header {
  --background: #3880ff;
  --color: #fff;
}

ion-toolbar ion-title {
  color: #fff;
}

ion-searchbar {
  --background: #fff;
  --color: #3880ff;
}
</style>
