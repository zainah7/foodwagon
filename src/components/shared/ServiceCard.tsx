import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
}

const ServiceCard = ({ icon, title }: ServiceCardProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Image src={icon} alt={title} width={50} height={50} />
      <h3 className="text-lg font-semibold text-yellow-500">{title}</h3>
    </div>
  );
};

export default ServiceCard;
