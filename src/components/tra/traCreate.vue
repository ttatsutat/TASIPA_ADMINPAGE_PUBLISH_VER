<template>
  <div>
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
                  <a class="nav-link " >Event</a>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/4">
                  <a class="nav-link">Attraction</a>
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
                  <a class="nav-link active" aria-current="page">Train</a>
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
          <label> Train Number</label>
          <input v-model.number="form.TrainNo" class="form-control" type="number" placeholder="e.g. 608" required />
        </div>

        <div class="form-group mt-3">
          <label>Type</label>
          <input v-model="form.Type" class="form-control" placeholder="e.g. Rapid, Ordinary" required />
        </div>
        <div class="form-group mt-3">
          <label>Departure Station</label>
          <input v-model="form.DepStation" class="form-control" placeholder="e.g. Bangkok" required />
        </div>
        <div class="form-group mt-3">
          <label>Departure Time (HH:MM)</label>
          <input v-model="form.DepTime" class="form-control" placeholder="e.g. 13:00" required />
        </div>
        <div class="form-group mt-3">
          <label>Destination Station</label>
          <input v-model="form.DestStation" class="form-control" placeholder="e.g. Salaya" required />
        </div>
        <div class="form-group mt-3">
          <label>Destination Time (HH:MM)</label>
          <input v-model="form.DestTime" class="form-control" placeholder="e.g. 18:00" required />
        </div>
        <br>
        <button type="submit" class="btn btn-primary btn-sm me-2" style="padding:8px;">
          Create Train
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    createUser
  } from '../../firebaseCRUD/firebaseTra'
  import {
    reactive
  } from 'vue'
  import firebase from 'firebase'

  export default {
    setup() {
      const form = reactive({
        TrainNo: '',
        Type: '',
        DestStation: '',
        DestTime: '',
        DepStation: '',
        DepTime: ''

      })

      const onSubmit = async () => {
        await createUser({
          ...form
        })
        form.TrainNo = ''
        form.Type = ''
        form.DestStation = ''
        form.DestTime = ''
        form.DepStation = ''
        form.DepTime = ''
      }

      return {
        form,
        onSubmit
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut()
          .then(() => {
            this.$router.replace('/signin')
          })
          .catch(error => {
            console.log(error.message)
          })

      }
    }
  }
</script>