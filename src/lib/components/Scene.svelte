<script lang="ts">
	import { T } from '@threlte/core';
	import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras';
	import { TextureLoader, RepeatWrapping } from 'three';
	import { data } from '$lib/components/process-data';

	const loadTexture = (url: string) => {
		const texture = new TextureLoader().load(url);
		// texture.wrapS = RepeatWrapping; // repeat the texture horizontally
		// texture.wrapT = RepeatWrapping; // repeat the texture vertically
		// texture.repeat.set(4, 4); // adjust the repeat values as needed
		return texture;
	};

	const solarSystem = data;
	$: console.log(solarSystem);
</script>

<T.PerspectiveCamera makeDefault position={[-30, 10, 10]} fov={15}>
	<OrbitControls autoRotate enableZoom={true} enableDamping autoRotateSpeed={0.5} target.y={1.5} />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={0.8} position.x={5} position.y={10} />
<T.AmbientLight intensity={0.2} />

<Grid
	position.y={-0.001}
	cellColor="#ffffff"
	sectionColor="#ffffff"
	sectionThickness={0}
	fadeDistance={25}
	cellSize={2}
/>

<ContactShadows scale={10} blur={2} far={2.5} opacity={0.5} />

{#each data as planet}
	<Float floatIntensity={1} floatingRange={[0, 1]}>
		<T.Mesh position={[planet.x, planet.y, planet.z]} rotation={[0, 0, 0]}>
			<T.SphereGeometry />
			<T.MeshBasicMaterial map={loadTexture(planet.image ?? '')} />
		</T.Mesh>
	</Float>
{/each}
