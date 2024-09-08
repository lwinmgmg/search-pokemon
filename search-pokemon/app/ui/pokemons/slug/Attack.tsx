export default function Attack({
    attack
}:{
    attack: PokemonAttack
}){
    return (
    <div>
        {attack.name}
    </div>
    );
}