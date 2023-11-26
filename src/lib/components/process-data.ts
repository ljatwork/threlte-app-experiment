import * as solarSystem from '$lib/components/solar-system.json';
import * as images from '$lib/components/solar-system-images.json';
const processData = () => {
	return solarSystem.datasets[0].data.map((planet) => {
		const imgStr = planet.image;
		return { ...planet, image: findItemByKey(images.dataset, imgStr) };
	});
};
function findItemByKey(jsonObj: any, keyToFind: string): string | undefined {
	const keys = Object.keys(jsonObj);
	for (const key of keys) {
		if (key === keyToFind) {
			return jsonObj[key];
		}
	}
	return undefined;
}

export const data = processData();
