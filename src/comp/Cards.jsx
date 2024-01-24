import { Cardo } from './Cardo';
export function Cards(props) {
	// console.log(props);
	// console.log(props.f);
	return props.cards.map((item) => {
		return item.section.id == 'HeroAcaAll.97' ? (
			<Cardo f={(e) => props.f(e)} key={item.mainId} img={item.displayAssets[0].url} displayName={item.displayName} displayDescription={item.displayDescription} rarity={item.rarity} finalPrice={item.price.finalPrice} />
		) : null;
	});
}
