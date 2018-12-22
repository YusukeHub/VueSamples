<template>
    <a v-bind:href="url" target="_blank"> {{name}} </a>
</template>
<script>
  export default {
    name: 'ChildPartsOne',
    props: {
      name: {default: ''},
      url: {default: ''}
    },
    data: function () {
      return {calcVal: 1};
    },
    methods: {
      // 入力が正しいか返す
      validate: function () {
        console.log("-->  ChildPartsOne.validate()");
        return true;
      },
      // 表示を再現する設定を返す(注意：この関数はgetRegistPromise()で事前登録しておかないと古い値を返す)
      buildConfig: function () {
        console.log("-->  ChildPartsOne.buildConfig(" + this.calcVal);
        return this.calcVal;
      },
      // 登録前に行う処理をPromiseオブジェクトとして返す
      getRegistPromise: function () {
        console.log("-->  ChildPartsOne.getRegistPromise(" + this.calcVal);
        return new Promise(this.prepareSave);
      },
      // 入力値を返す(注意：この関数はgetRegistPromise()で事前登録しておかないと古い値を返す)
      getValues: function () {
        console.log("-->  ChildPartsOne.getValues(" + this.calcVal);
        return this.calcVal;
      },
      // 保存前の準備をする(添付ファイルのアップロードなど)
      prepareSave: function (resolve, reject) {
        let self = this;
        setTimeout(function () {
          let rand = Math.floor(Math.random() * 100);
          console.log("-->  ChildPartsOne.prepareSave(" + self.calcVal + ' -> ' + rand);
          self.calcVal = rand;
          resolve(rand);
        }, 2000);
      }
    }
  }
</script>
