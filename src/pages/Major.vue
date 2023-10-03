<template>
    <div class="content">
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                            <template slot="header">
                                <h4 class="card-title">Tabel Program Studi</h4>
                                <!-- <p class="card-category"></p> -->
                            </template>
                            <b-table striped hover :items="items">
                                <template #cell(action)="data">
                                    <div>
                                        <button class="btn btn-danger btn-sm mr-2">
                                            <b-icon icon="trash"></b-icon>
                                        </button>
                                        <button class="btn btn-info btn-sm">
                                            <b-icon icon="pencil"></b-icon>
                                        </button>
                                    </div>
                                </template>
                            </b-table>
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
export default {
    components: {
        LTable,
        Card
    },
    data() {
        return {
            items: [
                { no: 1, name: 'Sistem Informasi', action: '' },
                { no: 2, name: 'Sistem Informasi', action: '' },
                { no: 3, name: 'Sistem Informasi', action: '' },
                { no: 4, name: 'Sistem Informasi', action: '' },
            ]
        }
    }
}
</script>
