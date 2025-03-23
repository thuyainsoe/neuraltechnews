import { Time02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import React from "react";
import SmallNewsCard from "@/components/SmallNewsCard/SmallNewsCard";

const Detail = () => {
  return (
    <div className="main-container section-container flex justify-start gap-[20px]">
      <div className="w-full ml:w-2/3 flex flex-col items-start gap-[20px]">
        <h1 className="post-title w-full">
          Streaming TV Industry Snooping on Viewers at Grand Scale: Report
        </h1>
        <div className="text-secondary">
          <div className="flex items-center gap-[5px]">
            <HugeiconsIcon
              icon={Time02Icon}
              size={15}
              color="#004aad"
              strokeWidth={2}
            />
            <span className="text-base font-semibold text-secondary">
              October 9, 2024 6:00 AM PT
            </span>
          </div>
        </div>
        <Image
          width={4000}
          height={2000}
          alt="image"
          src="/images/temp/image6.jpeg"
          className="w-full aspect-[5_/_3]"
        />
        <div className="post-content flex flex-col gap-[20px]">
          <p className="abbr">
            The streaming television industry has been accused of operating a
            massive data-driven surveillance apparatus that is transforming TVs
            into sophisticated monitoring, tracking, and targeting devices.
          </p>
          <p>
            In a 48-page report released Monday, the Washington, D.C.-based{" "}
            <a
              href="https://democraticmedia.org"
              target="_blank"
              rel="noopener"
            >
              Center for Digital Democracy
            </a>{" "}
            (CDD) outlined how the connected TV (CTV) industry captures and
            harvests information on individuals and families through a
            sophisticated and expansive commercial surveillance system,
            deliberately incorporating many of the data-gathering, monitoring,
            and targeting practices that have long undermined privacy and
            consumer protection online.
          </p>
          <p>
            “CTV has just replicated the commercial online surveillance
            ecosystem,” said CDD Executive Director Jeffrey Chester, who
            co-authored the report with Kathryn C. Montgomery.
          </p>
          <p>
            “They’ve simply recast the original sins they’ve done repeatedly
            online,” he told TechNewsWorld. “They’re working with data brokers
            now. They’re working with adtech companies. They’re working with
            measurement companies. So there’s this multilayered, connected
            television surveillance system that no individual can really
            address.”
          </p>
          <p>
            “It’s become a privacy nightmare because it’s happening throughout
            the television system, and regulators have really done nothing about
            it,” he added.
          </p>
          <h3>Creating Clandestine Digital Dossiers</h3>
          <p>
            According to the report, leading streaming video programming
            networks, CTV device companies, and “smart” TV manufacturers, allied
            with many of the country’s most powerful data brokers, are creating
            extensive digital dossiers on viewers based on a person’s identity
            information, viewing choices, purchasing patterns and thousands of
            online and offline behaviors.
          </p>
          <p>
            It also maintained that surveillance has been built directly into
            television sets, with major manufacturers’ smart TVs deploying
            automatic content recognition (ACR) and other monitoring software to
            capture an extensive, highly granular, and intimate amount of
            information that, when combined with contemporary identity
            technologies, enables tracking and ad targeting at the individual
            viewer level.
          </p>
          <p>
            “People watch TV in the privacy of their own homes and have a
            reasonable expectation that no one is watching them watch,” said
            Jacob Hoffman-Andrews, a senior staff technologist at the{" "}
            <a
              title=""
              className="aalmanual"
              target="_blank"
              href="https://www.eff.org"
            >
              Electronic Frontier Foundation
            </a>
            , an international non-profit digital rights group based in San
            Francisco.
          </p>
          <p>
            “The trend of building surveillance into all new smart TVs is
            incredibly invasive and little understood,” he told TechNewsWorld.
            “When people buy a device, they expect that device to serve their
            needs, not the manufacturer’s desires. Nobody wants a snooping and
            snitching television, but lately, that’s all you can buy.”
          </p>
          <h3>Solution Looking for a Problem</h3>
          <p>
            Rob Enderle, president and principal analyst at the{" "}
            <a
              title=""
              className="aalmanual"
              target="_blank"
              href="https://www.enderlegroup.com/"
            >
              Enderle Group
            </a>
            , an advisory services firm in Bend, Ore., pointed out that while
            the report highlights the potential for problems, it doesn’t provide
            any hard evidence of wrongdoing.
          </p>
          <p>
            In addition, he continued, using the harvested information to create
            more effective ads or better programming, which has largely been
            accepted by users as a tradeoff for better programming and
            advertisements that speak to them.
          </p>
          <p>
            “There isn’t much substance here, and the question must be asked of
            the user whether they are OK with this before acting with the
            assumption they aren’t,” he told TechNewsWorld. “Too often, we try
            to fix ‘problems’ that aren’t problems at all to the people affected
            by them, so care must be taken to assure the remedy addresses
            something people want fixed. Better programming and ads aren’t a
            problem to most users.”
          </p>
          <p>
            The report also noted that CTV has unleashed a powerful arsenal of
            interactive advertising techniques, including virtual product
            placement inserted into programming and altered in real time.
            Generative AI enables marketers to produce thousands of
            instantaneous “hypertargeted variations” personalized for individual
            viewers, it added.
          </p>
          <p>
            “A major pain point with ad-based streaming is when the ad repeats
            too many times or viewers seeing ads they don’t feel are relevant to
            them,” explained Sarah Lee, a research analyst with{" "}
            <a
              title=""
              className="aalmanual"
              target="_blank"
              href="https://www.parksassociates.com/"
            >
              Parks Associates
            </a>
            , a market research and consulting company specializing in consumer
            technology products, in Addison, Texas.
          </p>
          <p>
            “Just 29% of ad-based streaming viewers feel the ads they see are
            for products and services that are relevant to them,” she told
            TechNewsWorld. “CTV players are working on features that will
            heavily use AI to align ads with household preferences and the
            content surrounding the ad so that viewers see more relevant ads.”
          </p>
          <p>
            Incorporating interactive features, such as social media elements or
            direct shopping through ads, into streaming platforms is a
            concerning trend, noted Barry Lowenthal, president of{" "}
            <a href="https://inuvo.com" target="_blank" rel="noopener">
              Inuvo
            </a>
            , an advertising solutions company headquartered in Little Rock,
            Ark.
          </p>
          <p>
            “The convergence of streaming with e-commerce and social media
            ecosystems means that companies can now track an even broader range
            of online behaviors, combining this data with information from other
            platforms,” he told TechNewsWorld.
          </p>
          <p>
            “Moreover, many of these devices operate in connected environments
            where data from smart TVs can be cross-referenced with data from
            other internet of things [IoT] devices in the home. This creates
            even more comprehensive profiles of users, often without their
            knowledge.”
          </p>
          <h3>Regulation Needed</h3>
          <p>
            In tandem with the report’s release, the CDD submitted letters to
            the chairs of the FTC and FCC, as well as the California Attorney
            General and the California Privacy Protection Agency, calling on
            policymakers to address its report’s findings and implement
            effective regulations for the CTV industry.
          </p>
          <p>
            “Policymakers, scholars, and advocates need to pay close attention
            to the changes taking place in today’s 21st-century television
            industry,” co-author Montgomery said in a statement.
          </p>
          <p>
            “In addition to calling for strong consumer and privacy safeguards,”
            she continued, “we should seize this opportunity to re-envision the
            power and potential of the television medium and to create a policy
            framework for connected TV that will enable it to do more than serve
            the needs of advertisers.”
          </p>
          <p>
            “Our future television system in the United States should support
            and sustain a healthy news and information sector, promote civic
            engagement, and enable a diversity of creative expression to
            flourish,” she added.
          </p>
          <p>
            Mark N. Vena, president and principal analyst at{" "}
            <a
              title=""
              className="aalmanual"
              target="_blank"
              href="https://www.smarttechresearch.net/"
            >
              SmartTech Research
            </a>{" "}
            in Las Vegas, noted that government regulation of the streaming
            industry may be necessary to protect consumer privacy and prevent
            data exploitation.
          </p>
          <p>
            “Measures could include enforcing transparency in data collection
            practices, requiring clear and accessible privacy policies, and
            limiting the amount of personal information companies can harvest
            without explicit user consent,” he told TechNewsWorld.
          </p>
          <p>
            “Additionally, regulations could impose stronger security standards
            to safeguard user data and hold companies accountable for breaches
            or misuse of sensitive information.”
          </p>
          <p>
            Greg Sterling, co-founder of{" "}
            <a
              title=""
              className="aalmanual"
              target="_blank"
              href="https://www.nearmedia.co/"
            >
              Near Media
            </a>
            , a website focusing on search, social media, and local digital
            commerce, added that non-consensual data harvesting has been and
            continues to be a problem across digital platforms.
          </p>
          <p>
            “Virtually all the scenarios in the report involved opt-out
            provisions buried in terms and conditions or other difficult-to-find
            and utilize places,” he told TechNewsWorld. “The attitude of these
            companies is the more data, the better, and we’ll deal with the
            consequences if there are any.
          </p>
          <p>
            “The government does need to get involved,” he continued, “and there
            needs to be comprehensive privacy regulation that requires all but
            the most basic data collection to be consent-based with serious
            penalties for violators.”
          </p>
        </div>
      </div>
      <div className="hidden md:block w-1/3">
        <SmallNewsCard
          image="/images/temp/news/image1.png"
          title="The Rise of Quantum Computing and Its Impact on AI"
          date="March 20, 2025"
        />
      </div>
    </div>
  );
};

export default Detail;
