<template>
<div class="modalField" v-if="show">
  <div class="modal">
            <div class="modal__memomoMeter">
                <div class="modal__memomoMeter--polus">
                    <img src="@/assets/img/modal/gigchad.jpg" alt="gigchad">
                </div>
                <div class="modal__memomoMeter--ladder">
                    <div class="lader__item"></div>
                    <div class="lader__item"></div>
                    <div class="lader__item"></div>
                    <div class="lader__item"></div>
                    <div class="lader__item"></div>
                </div>
                <div class="modal__memomoMeter--polus">
                    <img src="@/assets/img/modal/fox.jpg" alt="fox">
                </div>
            </div>
            <div class="modal__block">
                <div class="modal__block--firstWindow">
                    <div class="firstWindow__alert">
                        <div class="firstWindow__alert--txt">
                            <div>Are you sure that your <i>Memometr</i> is more than 50%?</div>
                        </div>
                        <div class="firstWindow__alert--popUp" v-if="hover"></div>
                    </div>
                    <div class="firstWindow__button">
                     <button 
                     @mouseleave="hover = false"
                     @mouseenter="hover = true"
                     @click="hideModal">
                     YEAP</button>
                    </div>
                </div>
                <div class="modal__block--secondWindow"></div>
            </div>
            <div class="modal__memomoMeter">
                <div class="modal__memomoMeter--polus">
                    <img src="@/assets/img/modal/swole.png" alt="gigchad">
                </div>
                <div class="modal__memomoMeter--ladder">
                    <div class="lader__item lader__item--right"></div>
                    <div class="lader__item"></div>
                    <div class="lader__item"></div>
                    <div class="lader__item"></div>
                    <div class="lader__item lader__item--right"></div>
                </div>
                <div class="modal__memomoMeter--polus">
                    <img src="@/assets/img/modal/frog.png" alt="fox">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        hover:false,
    }
},
props:{
  show:{
    type: Boolean,
    default: true
  }
  },
  methods:{
    hideModal(){
      this.$emit('update:show',false)
      document.cookie = "Checker = true; max-age=3600"
    },
}
}
</script>

<style>

</style>