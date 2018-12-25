<template>
    <div>
        <h2>List Of Tasksk.</h2>
        <ul>
            <li v-for="child in children">
                <component v-bind:is="child.componentName"
                           v-bind="child"
                           ref="childParts">
                </component>
            </li>
        </ul>
    </div>
</template>

<script>
    import ChildPartsOne from "./ChildPartsOne";
    import ChildPartsTwo from "./ChildPartsTwo";

    export default {
        name: 'ChildList',
        components: {ChildPartsOne, ChildPartsTwo},
        data: function () {
            return {
                children: [
                    {componentName: 'ChildPartsOne', name: 'Create an child parts IF.', url: ''},
                    {componentName: 'ChildPartsTwo', name: 'run child functions. and show dialog of Result.', url: ''},
                    {componentName: 'ChildPartsOne', name: 'test promise sync tasks.', url: ''}
                ]
            }
        },
        methods: {
            // 入力値が不正ならfalseを返す
            validate: function () {
                console.log('->ChildList.validate()');
                let ret = true;

                // 全てのChildに問い合わせる
                this.$refs.childParts.forEach(function (item) {
                    if (false === item.validate()) {
                        ret = false;
                    }
                });
                return ret
            },
            // 登録前にしなければならない処理を返す(ない場合は長さ0の配列が返される)
            getRegistPromises: function () {
                console.log('->ChildList.getRegistPromises()');
                let promises = [];

                // 全てのChildに問い合わせる
                this.$refs.childParts.forEach(function (item) {
                    let ret = item.getRegistPromise();
                    if (ret) {
                        promises.push(ret);
                    }
                });
                return promises;
            },
            // 登録するConfigを返す
            buildConfig: function () {
                console.log('->ChildList.buildConfig()');
                let configs = [];

                // 全てのChildに問い合わせる
                this.$refs.childParts.forEach(function (item) {
                    configs.push(item.buildConfig());
                });
                return configs;
            }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
