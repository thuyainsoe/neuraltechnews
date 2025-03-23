import { MailReceive02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Button from "../Button";

const FooterColumn = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="w-full flex flex-col items-start gap-[10px]">
      <h4 className="text-[22px] text-heading font-oswald">{title}</h4>
      <ul className="flex flex-col gap-[5px] text-sm">
        {items.map((item, index) => (
          <li className="hover:underline cursor-pointer" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <div className="w-full bg-footerbg section-container">
        <div className="main-container w-full grid md:grid-cols-4 gap-y-[20px]">
          <FooterColumn
            title="Quick Links"
            items={[
              "Home",
              "About Us",
              "Contact",
              "Privacy Policy",
              "Terms of Service",
            ]}
          />
          <FooterColumn
            title="Categories"
            items={[
              "Computer",
              "Internet",
              "IT",
              "Mobile Tech",
              "Review",
              "Security",
              "Tech Blog",
              "Technology",
              "Most Popular",
            ]}
          />
          <FooterColumn
            title="Follow Us"
            items={["Facebook", "Twitter", "Instagram", "LinkedIn"]}
          />
          <div className="w-full flex flex-col items-start gap-[10px]">
            <h4 className="text-[22px] text-heading font-oswald">Newsletter</h4>
            <p className="text-sm">
              Stay updated with the latest tech news and trends. Subscribe to
              our newsletter.
            </p>
            <div className="w-full h-[38px] bg-white px-[10px] relative">
              <input
                type="text"
                className="w-full h-full border-none outline-none text-sm"
                placeholder="Please enter your email"
              />
              <HugeiconsIcon
                className="absolute top-1/2 right-[10px] translate-y-[-50%]"
                icon={MailReceive02Icon}
                size={20}
                color="currentColor"
                strokeWidth={1.5}
              />
            </div>
            <div className="w-full">
              <Button className="w-full" label="Subscribe" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-[15px]">
        <div className="main-container text-base text-heading">
          © 2025 NeuralTechNews. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
