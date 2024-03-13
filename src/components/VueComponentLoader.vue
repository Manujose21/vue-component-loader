<script setup>
    import { defineProps } from 'vue';
    const { configLoading,  fullScreen, hidden, typeLoading, screenBg, size } = defineProps({
        configLoading:{
            type: Object,
            default: {
                color: '#42b883',
                color2: '#35495e',
            }
        },
        size:{
            type: String,
            default : '50px'
        },
        fullScreen:{
            type: Boolean,
            default: false
        },
        hidden:{
            type: Boolean,
            default: false
        },
        typeLoading: {
            type : String,
            default : 'clasic-loading'
        },
        screenBg: {
            type: String,
            default: 'rgba(255,255,255, .5)'
        }
    })

    const { color, color2  } = configLoading
   

</script>

<template>
    <div :class="{ screen : fullScreen }" v-if="hidden">
        <div :class="typeLoading"  >
           <slot/>
        </div>
    </div>
</template>

<style lang="css" scoped>
.screen{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background-color: v-bind(screenBg);
}
    
.clasic-loading{
  position: relative;
  border: 3px solid v-bind(color2);
  border-radius: 50%;
  width: v-bind(size);
  height: v-bind(size);
  border-bottom: 3px solid v-bind(color);
  animation: animate-360deg 1s linear infinite;

}
.clasic-loading::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.gradient-loading{
    position: relative;
    width: v-bind(size);
    height: v-bind(size);
    border-radius: 50%;
    animation: animate-360deg 1.2s linear infinite;
}

.gradient-loading::after, .gradient-loading::before{
    content: '';
    position: absolute;
    border-radius: inherit;
}

.gradient-loading::before{
    width: 100%;
    height: 100%;
    background: linear-gradient( v-bind(color), v-bind(color2));
    -webkit-mask: radial-gradient(circle at center, transparent 0%, transparent 50%, white 50%);
    mask: radial-gradient(circle at center, transparent 0%, transparent 50%, white 50%);
}

.gradient-loading::after{
    width: 85%;
    height: 85%;
    background: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
}

.cicle-loading::after,
.cicle-loading::before{
    content: '';
    animation: animate-cicle 2s linear infinite;
    width: v-bind(size);
    height: v-bind(size);
    border: 4px solid v-bind(color);
    border-radius: 50%;
    position: absolute;
    margin-left: calc(-1 * v-bind(size)/2);
    margin-top: calc(-1 * v-bind(size)/2);
}
.cicle-loading::after{
    opacity: 0;
    animation-delay: 1s;
    
}

.points-loading{
    width: v-bind(size);
    height: v-bind(size);
    background: v-bind(color);
    border-radius: 50%;
    position: relative;
    animation: animate-points 1s linear infinite;
    animation-delay: 0.4s; 

}
.points-loading::after,
.points-loading::before{
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: inherit;
    border-radius: inherit;
    top: 0;
    left: 13px;
    animation: animate-points 1s linear infinite;
    animation-delay: 0.8s; 
}
.points-loading::before{
    top: 0;
    left: -13px;
    animation: animate-points 1s linear infinite;
    
}

.image-rotate{
    animation: animate-360deg 1.2s linear infinite;
}

.image-loading{
    animation: animate-loading-desvanece 1.2s linear infinite;
}

.image-scale{
    animation: animate-scale 1.2s linear infinite;
}
.image-desvanece-to-right{
    animation: animate-desvanece-to-right 1.2s linear infinite;
}
.image-desvanece-to-left{
    animation: animate-desvanece-to-left 1.2s linear infinite;
}
.image-desvanece-to-top{
    animation: animate-desvanece-to-top 1.2s linear infinite;
}
.image-desvanece-to-bottom{
    animation: animate-desvanece-to-bottom 1.2s linear infinite;
}

@keyframes animate-points {
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-5px);
    }
    100%{
        transform: translateY(0);
    }
}

@keyframes animate-cicle {
    0%{
        transform: scale(0);
        opacity: 1
    }
    100%{
        transform: scale(1);
        opacity: 0
    }
}
@keyframes animate-360deg{
    to{
        transform: rotate(360deg);
    }
}
@keyframes animate-loading-desvanece{
    0% , 100%{
    opacity: 1;
    }
    50%{
    opacity: 0;
    }
}
@keyframes animate-scale{
    0% , 100%{
        transform: scale(0.5);
    }
    50%{
        transform: scale(1.5);
    }
} 
@keyframes animate-desvanece-to-right {
    0%{
        opacity: 0;
        transform: translateX(-200%);
    }
    50%{
        opacity: 1;
    }
      100%{
        opacity: 0;
        transform: translateX(200%);

      }
}
@keyframes animate-desvanece-to-left {
    0%{
        opacity: 0;
        transform: translateX(200%);
    }
    50%{
        opacity: 1;
    }
      100%{
        opacity: 0;
        transform: translateX(-200%);

      }
}
@keyframes animate-desvanece-to-bottom {
    0%{
        opacity: 0;
        transform: translateY(-200%);
    }
    50%{
        opacity: 1;
    }
      100%{
        opacity: 0;
        transform: translateY(200%);

      }
}
@keyframes animate-desvanece-to-top {
    0%{
        opacity: 0;
        transform: translateY(200%);
    }
    50%{
        opacity: 1;
    }
      100%{
        opacity: 0;
        transform: translateY(-200%);

      }
}
</style>