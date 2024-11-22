import Image from "next/image";

export const Card = ({
  img = "https://swiperjs.com/demos/images/nature-2.jpg",
}: ICard): JSX.Element => {
  //constants

  //states

  //hooks

  //functions

  //effects

  //render

  return (
    <div className="bg-grayBackground w-[350px] h-[430px] rounded-3xl flex flex-col items-center p-4">
      {img && (
        <Image
          alt="cardimg"
          width={326}
          height={338}
          src={img!}
          className="rounded-xl"
        />
      )}
    </div>
  );
};
interface ICard {
  img?: string;
}
