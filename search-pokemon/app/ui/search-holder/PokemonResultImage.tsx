export default function PokemonResultImage({image}:{
    image: string
}){
    return (
        <div className="h-16 w-16 rounded-full" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
        </div>
    );
}