export default function PokemonImage({image}:{
    image: string
}){
    return (
        <div className="h-32 w-32 rounded-full" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
        </div>
    );
}