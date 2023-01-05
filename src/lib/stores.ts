import { writable, type Writable } from 'svelte/store';

export let isOverlayOpen: Writable<boolean> = writable(false);
export let isHeaderOpen: Writable<boolean> = writable(false);