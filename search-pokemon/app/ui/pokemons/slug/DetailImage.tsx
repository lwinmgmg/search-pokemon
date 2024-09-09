export default function DetailImage({
    image
}: {
    image: string
}) {

    return (
        <div className="group/preview h-80 w-80 rounded-md relative bg-white" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "fill",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
        </div>
    );
}