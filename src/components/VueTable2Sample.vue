<template>
    <div class="hello">
        <v-client-table :columns="columns" :data="data" :options="options">
            <a slot="email" slot-scope="props" :href="`mailto:${props.row.email}`">
                {{props.row.email}}
            </a>
        </v-client-table>
    </div>
</template>

<script>
    export default {
        name: 'VueTable2Sample',
        data: function () {
            return {
                columns: [
                    'id',
                    'name',
                    'email'
                ],
                data: this.getData(),
                options: {
                    filterByColumn: true,
                    listColumns: {
                        name: [{
                            id: 'sample1',
                            text: 'Spy'
                        }
                        ]
                    },
                    headings: {
                        id: 'id',
                        name: '名前',
                        email: 'メールアドレス'
                    },
                    sortable: [
                        'id', 'name'
                    ],
                    texts: {
                        filterPlaceholder: '検索する'
                    }
                }
            }
        },
        methods: {
            getData: function () {
                return [{
                    'id': 1,
                    'name': 'sample1',
                    'email': 'sample1@example.com',
                    'group_name': '人事部'
                },
                    {
                        'id': 2,
                        'name': 'sample2',
                        'email': 'sample2@example.com',
                        'group_name': '人事部'
                    },

                    {
                        'id': 3,
                        'name': 'sample3',
                        'email': 'sample3@example.com',
                        'group_name': '経理部'
                    },
                    {
                        'id': 4,
                        'name': 'sample4',
                        'email': 'sample4@example.com',
                        'group_name': '総務部'
                    }
                ];
            }
        }
    }
</script>

