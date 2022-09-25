<template>
  <footer class="footer" id="anchor">
     <div class="footer__logo">
     </div>
     <div class="footer__author">
        <div class="footer__author--txt">
            red syndicat corp 2022
        </div>
     </div>
     <div class="footer__contact">
        <div class="footer__media">
            <a href="https://www.instagram.com/s_s1c/" target="_blank" rel="noopener noreferrer" 
                    @mouseleave="hovers = false"
                     @mouseenter="hovers = true">
            <div class="footer__media--item">
                <div class="media__svg">
                    
                     <svg class="greenkSVG" v-if="hovers">
                        <use xlink:href="@/assets/img/sprite.svg#instagram-black"></use>  
                    </svg>
                    <svg class="blackSVG" v-else>
                        <use xlink:href="@/assets/img/sprite.svg#instagram-green"></use>
                    </svg>
                    
                </div>
            </div></a>
            <a href="https://www.facebook.com/people/%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%9B%D1%8B%D0%BC%D0%B0%D1%80%D1%8C/100026704785528/" target="_blank" rel="noopener noreferrer"
                    @mouseleave="hovers = false"
                     @mouseenter="hovers = true">
                <div class="footer__media--item">
                    <div class="media__svg">
                        <svg class="greenkSVG" v-if="hovers">
                            <use xlink:href="@/assets/img/sprite.svg#face-black"></use>
                        </svg>
                        <svg class="blackSVG" v-else>
                        <use xlink:href="@/assets/img/sprite.svg#face-green"></use>
                    </svg>
                    </div>
                </div>
            </a>
            <a href="https://github.com/SS0n1C/" target="_blank" rel="noopener noreferrer"
                    @mouseleave="hovers = false"
                     @mouseenter="hovers = true">
                <div class="footer__media--item">
                    <div class="media__svg">
                        <svg class="greenkSVG" v-if="hovers">
                            <use xlink:href="@/assets/img/sprite.svg#git-black"></use>
                        </svg>
                        <svg class="blackSVG" v-else>
                        <use xlink:href="@/assets/img/sprite.svg#git-green"></use>
                    </svg>
                    </div>
                </div>
            </a>
            <a href="https://ua.linkedin.com/in/vitalii-lymar-a0874023a" target="_blank" rel="noopener noreferrer"
                    @mouseleave="hovers = false"
                     @mouseenter="hovers = true">
                <div class="footer__media--item">
                    <div class="media__svg">
                        <svg class="greenkSVG" v-if="hovers">
                            <use xlink:href="@/assets/img/sprite.svg#linkedin-black"></use>
                        </svg>
                        <svg class="blackSVG" v-else>
                        <use xlink:href="@/assets/img/sprite.svg#linkedin-green"></use>
                    </svg>
                    </div>
                </div>
            </a>
        </div>
        <div class="footer__telephon">
            <a href="tel:+380933290995">+380939999999</a>
        </div>
        <div class="footer__email">
            <a href="mailto:lls.s0n1cll@gmail.com">lls.s0n1cll@gmail.com</a>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    data(){
    return{
        hovers:false,
    }
},

}
</script>

<style>

</style>