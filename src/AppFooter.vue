<template>
    <div class="social-icons">
        <a href="https://github.com/slashpotato" target="_blank"
            ><img src="https://simpleicons.org/icons/github.svg"
        /></a>
        <a href="https://t.me/+7TuiMp0c59kxMDdi" target="_blank"
            ><img src="https://simpleicons.org/icons/telegram.svg"
        /></a>
    </div>
</template>

<style scoped>
.social-icons {
    gap: 6px;
    display: flex;
}

.social-icons img {
    @apply dark:invert w-6 h-6 hover:scale-[120%] hover:animate-pulse transition-all duration-300;
}
</style>
