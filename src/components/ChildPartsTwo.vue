<template>
    <a v-bind:href="url" target="_blank"> {{name}} </a>
</template>
<script>
    export default {
        name: 'ChildPartsTwo',
        props: {
            name: {default: ''},
            url: {default: ''}
        },
        data: function () {
            return {calcVal: 2};
        },
        methods: {
            // 入力が正しいか返す
            validate: function () {
                console.log('-->  ChildPartsTwo.validate()');
                return true;
            },
            // 表示を再現する設定を返す(注意：この関数はgetRegistPromise()で事前登録しておかないと古い値を返す)
            buildConfig: function () {
                console.log('-->  ChildPartsTwo.buildConfig(' + this.calcVal);
                return this.calcVal;
            },
            // 登録前に行う処理をPromiseオブジェクトとして返す
            getRegistPromise: function () {
                console.log('-->  ChildPartsTwo.getRegistPromise(' + this.calcVal);
                return new Promise(this.prepareSave);
            },
            // 入力値を返す(注意：この関数はgetRegistPromise()で事前登録しておかないと古い値を返す)
            getValues: function () {
                console.log('-->  ChildPartsTwo.getValues(' + this.calcVal);
                return this.calcVal;
            },
            // 保存前の準備をする(添付ファイルのアップロードなど)
            prepareSave: function (resolve, reject) {
                let self = this;
                setTimeout(function () {
                    let rand = Math.floor(Math.random() * 100);
                    console.log('-->  ChildPartsTwo.prepareSave(' + self.calcVal + ' -> ' + rand);
                    self.calcVal = rand;
                    resolve(rand);
                }, 4000)
            }
        }
    }
</script>
