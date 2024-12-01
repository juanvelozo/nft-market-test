import Image from "next/image";
import Text from "../common/Text/Text";
import Button from "../common/Button/Button";

export const TopCreatorsCard = (): JSX.Element => {
  return (
    <div className="bg-grayBackground min-h-96 rounded-3xl p-5">
      <div className="flex items-center justify-between">
        <Text size={24} heavy>
          Top creators
        </Text>
        <Text size={12}>See all</Text>
      </div>
      <div className="flex flex-col gap-2 my-4">
        {creators.map((el, i) => (
          <div key={i} className="flex justify-between">
            <div className="flex items-center justify-start gap-3">
              <Text>{i + 1}.</Text>
              <Image
                alt={el.name + "profilephoto"}
                src={el.profilePhoto}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <Text>{el.name}</Text>
                <Text color="grayText">@{el.userName}</Text>
              </div>
            </div>
            <Button variant={i == 3 ? "primary" : "white"}>
              {i == 3 ? "Following" : "Follow"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const creators = [
  {
    name: "Juan Pérez",
    userName: "juanperez",
    profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Emily Johnson",
    userName: "j_emily",
    profilePhoto: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Akira Tanaka",
    userName: "tanakaa",
    profilePhoto: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sofía Ramírez",
    userName: "sofiaRR",
    profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Smith",
    userName: "MS99",
    profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];
