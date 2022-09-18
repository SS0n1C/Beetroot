<template>
  <footer class="footer">
     <div class="footer__logo">
     </div>
     <div class="footer__author">
        <div class="footer__author--txt">
            red syndicat corp 2022
        </div>
     </div>
     <div class="footer__contact">
        <div class="footer__media">
            <a href="#" target="_blank" rel="noopener noreferrer" 
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
            <a href="#" target="_blank" rel="noopener noreferrer"
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
            <a href="#" target="_blank" rel="noopener noreferrer"
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
            <a href="#" target="_blank" rel="noopener noreferrer"
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
            <a href="tel:+380933290995">+380933290995</a>
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