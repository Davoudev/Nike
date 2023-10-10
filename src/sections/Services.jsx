import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center gap-9 px-16 max-sm:px-6">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  );
};

export default Services;
