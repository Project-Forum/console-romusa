<template>
    <div class="content">
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <card class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">
                            <template slot="header">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h4 class="card-title">Tabel Program Studi</h4>
                                    </div>
                                    <div class="col-sm-6">
                                        <button class="btn btn-success btn-sm float-right" v-b-modal.modalAddProdi>
                                            <b-icon icon="plus-lg"></b-icon> Tambah Prodi
                                        </button>
                                    </div>
                                </div>
                            </template>
                            <b-table striped hover :items="items">
                                <template #cell(action)="data">
                                    <div>
                                        <button class="btn btn-danger btn-sm mr-2">
                                            <b-icon icon="trash"></b-icon>
                                        </button>
                                        <button class="btn btn-info btn-sm" v-b-modal.modalEditProdi>
                                            <b-icon icon="pencil"></b-icon>
                                        </button>
                                    </div>
                                </template>
                            </b-table>
                        </card>
                    </div>
                </div>
            </div>

            <!-- modal Add prodi -->
            <b-modal id="modalAddProdi" title="Tambah Program Studi" hide-footer>
                <div class="form-group">
                    <label for="">Nama Program Studi</label>
                    <input type="text" class="form-control" placeholder="cth: Sistem Informasi">
                </div>

                <button class="btn btn-success float-right mt-3">Tambah</button>
            </b-modal>
            <!-- end modal add prodi -->
            
            <!-- modal edit prodi -->
            <b-modal id="modalEditProdi" title="Ubah Program Studi" hide-footer>
                <div class="form-group">
                    <label for="">Nama Program Studi</label>
                    <input type="text" class="form-control" placeholder="cth: Sistem Informasi">
                </div>

                <button class="btn btn-success float-right mt-3">Ubah</button>
            </b-modal>
            <!-- end modal edit prodi -->

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
            ],
            modalAddProdi: false,
        }
    }
}
</script>
