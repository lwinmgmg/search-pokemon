export default function DetailImage({
    image
}:{
    image: string
}){
    return (
        <div className="h-80 w-80 rounded-md" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
        </div>
    );
}