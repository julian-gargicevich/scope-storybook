import Tag from "components/Tag";
import { FaLinkedin } from "react-icons/fa6";

type Props = {
  image?: string;
  name: string;
  tag: string;
  role: string;
  location: string;
  linkedin?: string;
};

const ContactCard = ({ image, name, tag, role, linkedin, location }: Props) => (
  <a href={linkedin} target="_blank" rel="noreferrer">
    <div className="flex min-w-[300px] flex-1 flex-row rounded p-2 transition-all duration-200 hover:scale-[1.005] hover:bg-primary/5">
      <img src={image} alt={name} className="h-28 w-28 rounded  object-cover" />
      <div className="ml-3 flex w-full flex-1 flex-col">
        <div className="mb-2 flex w-full justify-between">
          <Tag title={tag} size="small" />
          <FaLinkedin color="#0A66C2" size={20} />
        </div>
        <div className="flex flex-1 flex-col">
          <span className="font-sans text-sm font-semibold ">{name}</span>
          <span className="font-sans text-xs text-gray-500">{role}</span>
          <span className="font-sans text-xs text-gray-500">{location}</span>
        </div>
      </div>
    </div>
  </a>
);

export default ContactCard;
