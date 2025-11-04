interface CharacterImageProps {
  imageUrl: string;
  name: string;
}

export function CharacterImage({ imageUrl, name }: CharacterImageProps) {
  return (
    <div className="w-1/3">
      <div className="rounded-2xl overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full aspect-square object-cover"
        />
      </div>
    </div>
  );
}