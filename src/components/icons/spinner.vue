<template>
        <svg xmlns="http://www.w3.org/2000/svg" :width="width ?? 30" :height="height ?? 30" viewBox="0 0 38 38"
            :stroke="fill ?? '#BB7C65'">
            <g fill="none" fill-rule="evenodd">
                <g transform="translate(1 1)" stroke-width="3">
                    <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s"
                            repeatCount="indefinite" />
                    </path>
                </g>
            </g>
        </svg>
    <slot></slot>
</template>

<script setup>
defineProps(['width', 'height', 'fill'])
</script>