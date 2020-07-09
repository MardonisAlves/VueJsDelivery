<template>
  <div>
  <b-container>
    <b-list-group>
        <b-row>
          <b-col sm="4" md="6" lg="6">
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar class="mr-3" size="6rem"></b-avatar>
            <span class="mr-auto">J. Circlehead</span>
            <b-badge>5</b-badge>
          </b-list-group-item>
        </b-col>

        <b-col sm="4" md="6" lg="6">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar variant="primary" text="BV" class="mr-3" size="6rem"></b-avatar>
          <span class="mr-auto">BootstrapVue</span>
          <b-badge>12</b-badge>
        </b-list-group-item>
      </b-col>

      <b-col sm="4" md="6" lg="6">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3" size="6rem"></b-avatar>
          <span class="mr-auto">Super Kitty</span>
          <b-badge>9</b-badge>
        </b-list-group-item>
      </b-col>

      <b-col sm="4" md="6" lg="6">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar variant="info" src="static/images/calabresa.png" class="mr-3" size="6rem"></b-avatar>
          <span class="mr-auto">Super Kitty</span>
          <b-badge>9</b-badge>
        </b-list-group-item>
      </b-col>

      <b-col sm="4" md="6" lg="6">
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar variant="success" icon="people-fill" class="mr-3" size="6rem"></b-avatar>
          <span class="mr-auto">ACME group</span>
          <b-badge>7</b-badge>
        </b-list-group-item>
      </b-col>

        </b-row>
  </b-list-group>
    </div>
  </b-container>
    </div>

</template>
<script>
export default {
  name: 'Card'
}
</script>
<style>
.list-group {
  border: 0px;
  margin-top: 100px;
}
.list-group .list-group-item {
 border: 0px;
}
</style>
