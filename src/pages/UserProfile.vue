<template>
  <div class="content">
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
              <template slot="header">
                <h4 class="card-title">Tabel Pengguna</h4>
                <p class="card-category"></p>
              </template>
              <l-table class="table-hover table-striped" :columns="table1.columns" :data="table1.data">
              </l-table>
            </card>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  const tableColumns = ['No', 'Nama', 'Email', 'Status', 'Aksi']
  const tableData = [{
    no: 1,
    nama: 'Dakota Rice',
    email: '$36.738',
    status: 'Niger',
    aksi: 'Oud-Turnhout'
  },
  {
    no: 2,
    nama: 'Minerva Hooper',
    email: '$23,789',
    status: 'Curaçao',
    aksi: 'Sinaai-Waas'
  },
  {
    no: 3,
    nama: 'Sage Rodriguez',
    email: '$56,142',
    status: 'Netherlands',
    aksi: 'Baileux'
  },
  {
    no: 4,
    nama: 'Philip Chaney',
    email: '$38,735',
    status: 'Korea, South',
    aksi: 'Overland Park'
  },
  {
    no: 5,
    nama: 'Doris Greene',
    email: '$63,542',
    status: 'Malawi',
    aksi: 'Feldkirchen in Kärnten'
  }]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }

</script>
<style></style>
