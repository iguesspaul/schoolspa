import { writable } from 'svelte/store';

export let isOverlayOpen = writable(false);
export let isHeaderOpen = writable(false);