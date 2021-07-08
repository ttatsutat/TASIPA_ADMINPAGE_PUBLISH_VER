<template>
  <!-- this page is for getting all the input to add new attraction data -->
  <div>
    <!-- This part of code is for designing navbar -->
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style="padding-left: 10px;">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <strong><a class="navbar-brand" style="color: darkblue;" href="#">TASIPA</a></strong>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/1">
                  <a class="nav-link">Restaurant</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/2">
                  <a class="nav-link ">Event</a>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/4">
                  <a class="nav-link active" aria-current="page">Attraction</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/3">
                  <a class="nav-link">Amenity</a>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/5">
                  <a class="nav-link">Promotion</a>
                </router-link>
              </li>
               <li class="nav-item">
                <router-link to="/6">
                  <a class="nav-link">Train</a>
                </router-link>
              </li>
               <li class="nav-item">
                <router-link to="/7">
                  <a class="nav-link">Advertisement</a>
                </router-link>
              </li>
              <li class="nav-item" style="position: absolute; top: 1; right: 0; width: 100px; text-align:right;">
                <a class="nav-link" @click="logout" style="color:red">Sign Out</a>
              </li>
            </ul>


          </div>
        </div>
      </nav>
    </header>
    <div class="card card-body mt-4">
      <p style="color:#6666ff;">* All fields are mandatory</p>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label> Attraction Name</label>
          <input v-model="form.Name" class="form-control" placeholder="e.g. Tasipa Attraction" required />
        </div>
        <div class="form-group mt-3">
          <label>Description</label>
          <input v-model="form.Description" class="form-control" placeholder="e.g. This attraction was opened since 1967" required />
        </div>
        <div class="form-group mt-3">
          <label>Category</label>
          <input v-model="form.Category" class="form-control" placeholder="e.g. Museum, Aquarium" required />
        </div>
        <div class="form-group mt-3">
          <label>Location</label>
          <input v-model="form.Location" class="form-control" placeholder="Salaya" required />
        </div>
        <div class="form-group mt-3">
          <label>Latitude</label>
          <input v-model.number="form.Latitude" class="form-control" type="number" Step = "any" placeholder="e.g. 13.7563" required />
        </div>
        <div class="form-group mt-3">
          <label>Longitude</label>
          <input v-model.number="form.Longitude" class="form-control" type="number" Step = "any" placeholder="e.g. 100.5018" required />
        </div>
        <div class="form-group mt-3">
          <label>Rating</label>
          <input v-model.number="form.Rating" class="form-control" type="number" step='any' placeholder="e.g. 4.0" required />
        </div>

        <div class="form-group mt-3">
          <label>Image Url of Restaurant</label>
          <input v-model="form.imageURL" class="form-control" placeholder="Image link e.g. https://www.TASIPA.com" required />
        </div>
        <br>
        <button type="submit" class="btn btn-primary btn-sm me-2" style="padding:8px;">
          Create Attraction
        </button>
      </form>
    </div>
    <div class="card card-body mt-4">
      <center>
        <h1>Upload & Get link</h1>
        Here you can upload your file to firebase storage and get link
        <div>
          <div>
            <br>
            <button @click="popup" class="btn btn-primary btn-sm me-2" style="padding:8px;">Choose Image</button>
            <input type="file" ref="input1" style="display: none" @change="previewImage" accept="image/*">
          </div>
          <br>
          <div v-if="imageData!=null">
            <img class="preview" height="268" width="356" :src="preview">
            <br>
          </div><br>
        </div>
      </center>
      <TEXTAREA ID="holdtext" style="height:50px width:200px;"></TEXTAREA>
    </div>
  </div>
</template>

<script>
  import {
    createUser
  } from '../../firebaseCRUD/firebaseAtt'
  import {
    reactive
  } from 'vue'
  import firebase from 'firebase'

  export default {
    data() {
      return {
        preview: '',
        imageData: null
      }
    },
    // this function gets all data from form and push it to firebaseAtt.js
    setup() {
      const form = reactive({
        Name: '',
        Description: '',
        Category: '',
        Location: '',
        Latitude: '',
        Longitude: '',
        Rating: '',
        RatingNo: 200,
        distance: 0,
        id: 3400,
        imageURL: ''
      })

      const onSubmit = async () => {
        await createUser({
          ...form
        })
        form.Name = ''
        form.Description = ''
        form.Category = ''
        form.Location = ''
        form.Latitude = ''
        form.Longitude = ''
        form.Rating = ''
        form.imageURL = ''
      }

      return {
        form,
        onSubmit
      }
    },
    methods: {
      //to sign out
      logout() {
        firebase.auth().signOut()
          .then(() => {
            this.$router.replace('/signin')
          })
          .catch(error => {
            console.log(error.message)
          })

      },
      popup() {
        this.$refs.input1.click()
      },
      previewImage(event) {
        this.uploadValue = 0;
        this.preview = null;
        this.imageData = event.target.files[0];
        this.onUpload()
      },
      onUpload() {
        this.preview = null
        var rand = Math.random() * Math.pow(10, 16)
        const storageRef = firebase.storage().ref(`${rand}${this.imageData.name}`).put(this.imageData);
        storageRef.on(`state_changed`, snapshot => {
            this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }, error => {
            console.log(error.message)
          },
          () => {
            this.uploadValue = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.preview = url
              document.getElementById("holdtext").innerHTML = url
            });
          }
        );
      }
    }
  }
</script>