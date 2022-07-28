import type {Entity} from '$lib/Entity';

// TODO maybe change this to be `toJson` and `fromJson` on `SnakeGame.svelte`?
export interface SnakeGameState {
	mapWidth: number; // tile count x
	mapHeight: number; // tile count y
	tickDuration: number; // ms per tick
	score: number; // how many apples have been eaten
	tiles: Entity[];
	apples: Entity[];
	snakeSegments: Entity[];
}

export const toDefaultGameState = (): SnakeGameState => ({
	mapWidth: 16,
	mapHeight: 16,
	tickDuration: 1000,
	score: 0,
	tiles: [],
	apples: [],
	snakeSegments: [],
});
