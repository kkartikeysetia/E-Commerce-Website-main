/* eslint-disable react/prop-types */
import StatsCardExported from "../components/About/StatsCard.jsx";
import TeamMembers from "../components/About/TeamMembers";
import Services from "../components/common/components/Services.jsx";
import ActiveLastBreadcrumb from "../components/common/components/Link.jsx";
import i18n from "../components/common/components/LangConfig";

const About = () => {
  return (
    <>
      {/* ================================ */}
      {/* HERO SECTION                     */}
      {/* breadcrumb + Our Story + stats   */}
      {/* ================================ */}
      <div className="flex flex-col justify-center items-start mt-20">
        {/* breadcrumb */}
        <div className="md:mx-40">
          <ActiveLastBreadcrumb
            path={`${i18n.t("home")}/${i18n.t("aboutPage.title")}`}
          />
        </div>

        {/* story + stats */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center md:mt-10 mx-auto my-24 md:mb-36 gap-10">
          {/* left column – story text */}
          <div className="flex flex-col gap-10 items-start justify-center max-w-xl mx-8 md:mx-40">
            <h1 className="text-5xl font-bold font-inter">
              {i18n.t("aboutPage.story")}
            </h1>
            <p className="text-base">{i18n.t("aboutPage.paragraph1")}</p>
            <p className="text-base">{i18n.t("aboutPage.paragraph2")}</p>
          </div>

          {/* right column – four stats cards */}
          <div className="w-full md:w-[900px]">
            <StatsCardExported />
          </div>
        </div>
      </div>

      {/* ================================ */}
      {/* TEAM MEMBERS SECTION             */}
      {/* ================================ */}
      <div className="flex flex-col items-center justify-center gap-8 my-36">
        <TeamMembers />
      </div>

      {/* ================================ */}
      {/* SERVICES SECTION                 */}
      {/* ================================ */}
      <Services />
    </>
  );
};
export default About;
