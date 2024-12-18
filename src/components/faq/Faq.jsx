import { faqData } from "../../utils/Faqdata";
import { FaqSvg1, FaqSvg5, FaqSvg6 } from "../svg/Svg";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Any Questions? Look Here
              </h2>
              <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {faqData.map((item) => (
            <div key={item.id} className="w-full px-4 lg:w-1/2">
              <div className="mb-12 flex lg:mb-[70px]">
                <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                  <FaqSvg1 />
                </div>
                <div className="w-full">
                  <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base text-body-color dark:text-dark-6">
                    {item.description}
                  </p>
                </div>
              </div>
              {/**/}
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className="absolute left-4 top-4 -z-[1]">
          <FaqSvg5 />
        </span>
        <span className="absolute bottom-4 right-4 -z-[1]">
          <FaqSvg6 />
        </span>
      </div>
    </section>
  );
};
export default Faq;
